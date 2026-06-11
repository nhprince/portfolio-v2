export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-meta text-text-muted">
          © {new Date().getFullYear()} NH Prince Prodhan
        </p>
        <p className="font-mono text-meta text-text-muted">
          Built with Next.js · Deployed on Cloudflare
        </p>
      </div>
    </footer>
  );
}
