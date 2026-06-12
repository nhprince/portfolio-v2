#!/usr/bin/env python3
"""Deploy Next.js static export to Cloudflare Pages via API."""
import os
import sys
import json
import subprocess
import requests

def main():
    account_id = os.environ.get("CF_ACCOUNT_ID")
    api_token = os.environ.get("CLOUDFLARE_API_TOKEN")
    project_name = "portfolio-v2"
    build_dir = "out"

    if not account_id or not api_token:
        print("ERROR: CF_ACCOUNT_ID and CLOUDFLARE_API_TOKEN must be set")
        sys.exit(1)

    # Create project if it doesn't exist
    headers = {
        "Authorization": f"Bearer {api_token}",
        "Content-Type": "application/json",
    }

    # Check if project exists
    resp = requests.get(
        f"https://api.cloudflare.com/client/v4/accounts/{account_id}/pages/projects/{project_name}",
        headers=headers,
    )

    if resp.status_code == 404:
        print(f"Creating project {project_name}...")
        resp = requests.post(
            f"https://api.cloudflare.com/client/v4/accounts/{account_id}/pages/projects",
            headers=headers,
            json={"name": project_name, "production_branch": "main"},
        )
        if not resp.json().get("success"):
            print(f"ERROR creating project: {resp.text}")
            sys.exit(1)
        print(f"Project {project_name} created")

    # Upload files
    print(f"Uploading {build_dir}/ to Cloudflare Pages...")

    # Get file list
    files = []
    for root, dirs, filenames in os.walk(build_dir):
        for filename in filenames:
            filepath = os.path.join(root, filename)
            relpath = os.path.relpath(filepath, build_dir)
            files.append((relpath, filepath))

    print(f"Found {len(files)} files to upload")

    # Upload via direct upload API
    upload_url = f"https://api.cloudflare.com/client/v4/accounts/{account_id}/pages/projects/{project_name}/upload"

    # Use multipart upload
    multipart_files = {}
    for relpath, filepath in files:
        with open(filepath, "rb") as f:
            multipart_files[relpath] = (relpath, f.read())

    resp = requests.post(
        upload_url,
        headers={"Authorization": f"Bearer {api_token}"},
        files=multipart_files,
    )

    if resp.status_code == 200 and resp.json().get("success"):
        print(f"✅ Deployed successfully to https://{project_name}-13d.pages.dev")
    else:
        print(f"Upload response: {resp.status_code} {resp.text[:500]}")
        # Try alternative: use wrangler pages deploy via npx with --legacy-peer-deps
        print("Trying alternative deployment via npx wrangler...")
        result = subprocess.run(
            ["npx", "--yes", "wrangler@3", "pages", "deploy", build_dir, f"--project-name={project_name}", "--commit-dirty=true"],
            env={**os.environ, "CLOUDFLARE_API_TOKEN": api_token, "CLOUDFLARE_ACCOUNT_ID": account_id},
            capture_output=True,
            text=True,
        )
        print(result.stdout)
        if result.returncode != 0:
            print(f"ERROR: {result.stderr}")
            sys.exit(1)
        print(f"✅ Deployed successfully to https://{project_name}-13d.pages.dev")

if __name__ == "__main__":
    main()
