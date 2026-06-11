import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "NH Prince Prodhan",
  title: "NH Prince Prodhan — Full-Stack Developer",
  description:
    "Full-Stack Developer from Dhaka, Bangladesh. Building modern web applications with React, TypeScript, Node.js, and Python.",
  url: "https://portfolio.nhprince.dpdns.org",
  email: "contact@nhprince.me",
  github: "https://github.com/nhprince",
  linkedin: "https://linkedin.com/in/nh-prince-prodhan-a1b46a399",
  twitter: "https://twitter.com/nhprince",
};
