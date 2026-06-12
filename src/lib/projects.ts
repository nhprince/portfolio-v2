export interface Project {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  live?: string;
  github?: string;
  category: string;
  featured: boolean;
  image?: string;
}

export const categories = [
  "All",
  "SaaS",
  "AI",
  "Full-Stack",
  "Frontend",
  "Tools",
] as const;

export const projects: Project[] = [
  {
    id: "saturday",
    number: "01",
    name: "Saturday AI Agent",
    tagline: "Autonomous AI System",
    description:
      "Jarvis-inspired autonomous AI agent running on a cloud VPS. Features Telegram gateway, multi-model routing with 23 fallbacks, sub-agent delegation, cron scheduling, and 1,200+ skills. Built with Hermes Agent framework.",
    tech: ["Node.js", "TypeScript", "Cloudflare Workers", "AI/ML", "Telegram API"],
    live: "https://saturday-62d.pages.dev",
    github: "https://github.com/nhprince/saturday",
    category: "AI",
    featured: true,
    image: "/projects/saturday.svg",
  },
  {
    id: "lenden",
    number: "02",
    name: "Lenden POS",
    tagline: "Point of Sale System",
    description:
      "Full-featured POS and inventory management system for small businesses. Real-time stock tracking, sales analytics, multi-user roles, receipt printing, and cloud sync. Built during freelancing career.",
    tech: ["React", "Node.js", "Express", "MySQL", "REST API"],
    live: "https://lenden.com.bd",
    category: "Full-Stack",
    featured: true,
    image: "/projects/lenden.svg",
  },
  {
    id: "gssc",
    number: "03",
    name: "GSSC Library",
    tagline: "School Management",
    description:
      "Complete school library management system with student portal, book cataloging, issue/return tracking, fine management, and digital reading room. Serves 500+ students.",
    tech: ["React", "PHP", "MariaDB", "Vite", "Tailwind"],
    live: "https://gssclibrary.nhprince.dpdns.org",
    github: "https://github.com/nhprince/GSSC-Library",
    category: "Full-Stack",
    featured: true,
    image: "/projects/gssc.svg",
  },
  {
    id: "witches",
    number: "04",
    name: "The Witches BD",
    tagline: "E-Commerce Store",
    description:
      "Modern e-commerce storefront for a cosmetics brand. Product catalog, shopping cart, order management, and customer reviews. Built with React and deployed on Cloudflare Pages.",
    tech: ["React", "Tailwind", "Cloudflare Pages", "Firebase"],
    live: "https://the-witches-bd.nhprince.dpdns.org",
    category: "Frontend",
    featured: false,
    image: "/projects/witches.svg",
  },
  {
    id: "ai-landing",
    number: "05",
    name: "AI Art Generator",
    tagline: "Generative AI Tool",
    description:
      "AI-powered art generation platform with 15+ artistic styles. Features real-time generation, style transfer, image gallery, and cloud-based processing. Serves 100+ daily users.",
    tech: ["Cloudflare Workers", "AI API", "React", "KV Storage"],
    live: "https://ai-landing.nurulhudaprince18.workers.dev",
    category: "AI",
    featured: false,
    image: "/projects/ai-landing.svg",
  },
  {
    id: "portfolio-v1",
    number: "06",
    name: "Portfolio v1",
    tagline: "Personal Branding",
    description:
      "First portfolio website built with Next.js and Framer Motion. Featured dark theme, glassmorphism design, and interactive 3D elements. Iterated 10+ times based on feedback.",
    tech: ["Next.js", "Framer Motion", "Three.js", "Tailwind"],
    category: "Frontend",
    featured: false,
  },
  {
    id: "url-shortener",
    number: "07",
    name: "URL Shortener",
    tagline: "Developer Tool",
    description:
      "Lightweight URL shortening service with custom alias support, click analytics, QR code generation, and API access. Built as a micro-SaaS tool.",
    tech: ["Cloudflare Workers", "KV", "TypeScript", "REST API"],
    category: "Tools",
    featured: false,
  },
  {
    id: "weather-cli",
    number: "08",
    name: "Weather CLI",
    tagline: "Terminal Tool",
    description:
      "Beautiful terminal weather app with ASCII art, 7-day forecasts, and location auto-detection. Supports multiple output formats and shell integration.",
    tech: ["Python", "CLI", "OpenWeather API", "Rich"],
    github: "https://github.com/nhprince",
    category: "Tools",
    featured: false,
  },
  {
    id: "blog-engine",
    number: "09",
    name: "Markdown Blog Engine",
    tagline: "Content Platform",
    description:
      "Custom blog engine with MDX support, syntax highlighting, reading time estimation, and SEO optimization. Powers this portfolio's blog section.",
    tech: ["Next.js", "MDX", "Contentlayer", "Tailwind"],
    category: "Full-Stack",
    featured: false,
  },
];
