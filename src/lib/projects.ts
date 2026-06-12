export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  tech: string[]
  category: string
  live: string | null
  github: string | null
  featured: boolean
  number: string
}

export const projects: Project[] = [
  {
    id: 'minimalist-gaming',
    name: 'MINIMALIST Gaming',
    tagline: 'Custom mousepad design studio',
    description: 'A Fabric.js canvas tool for designing custom gaming mousepads. Multi-layer backgrounds, real-time preview, mobile-optimized UI. His most sophisticated design engineering project.',
    tech: ['Fabric.js', 'JavaScript', 'HTML/CSS', 'Canvas API'],
    category: 'Design',
    live: 'https://minimalist.stuckstudio.com',
    github: null,
    featured: true,
    number: '01',
  },
  {
    id: 'lenden-pos',
    name: 'Lenden POS',
    tagline: 'Automated point-of-sale system',
    description: 'Full POS used by real shops. Live inventory, sales dashboards, multi-branch support. Daily email reports, PDF generation, and low-stock alerts run automatically without human input.',
    tech: ['React', 'Node.js', 'MySQL', 'Tailwind'],
    category: 'Web App',
    live: 'https://lenden.nhprince.dpdns.org',
    github: 'https://github.com/nhprince/Lenden-POS',
    featured: true,
    number: '02',
  },
  {
    id: 'stuck-studio',
    name: 'Stuck Studio',
    tagline: 'Digital agency website',
    description: 'Full public website for Stuck Studio — the agency Prince founded. Dark creative aesthetic, scroll animations, video portfolio, service pages built to convert.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    category: 'Web App',
    live: 'https://stuckstudio.com',
    github: null,
    featured: true,
    number: '03',
  },
  {
    id: 'witches-bd',
    name: 'The Witches BD',
    tagline: 'E-commerce storefront',
    description: 'Full e-commerce for a Bangladeshi handmade crochet brand. Product catalog, cart, order tracking, user accounts, custom admin panel.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    category: 'E-Commerce',
    live: 'https://the-witches-bd.stuckstudio.com',
    github: 'https://github.com/nhprince/The-Witches-BD',
    featured: false,
    number: '04',
  },
  {
    id: 'gssc-library',
    name: 'Smart Library System',
    tagline: 'College library management',
    description: 'Full library management for a college — books, students, fines, and notifications. Still actively running.',
    tech: ['PHP', 'React', 'MySQL', 'Bootstrap'],
    category: 'Web App',
    live: 'https://gssclibrary.nhprince.dpdns.org',
    github: 'https://github.com/nhprince/GSSC-Library',
    featured: false,
    number: '05',
  },
  {
    id: 'gssc-forum',
    name: 'GSSC College Forum',
    tagline: 'Student community platform',
    description: 'Community platform for college students with real-time messaging, user roles, and mobile-responsive UI.',
    tech: ['HTML', 'PHP', 'Tailwind CSS'],
    category: 'Web App',
    live: 'https://gssc.stuckstudio.com',
    github: null,
    featured: false,
    number: '06',
  },
  {
    id: 'mh-creationx',
    name: 'MH Creation X',
    tagline: 'Studio management system',
    description: 'Backend management system for a graphic design studio. Tracks expenses and earnings, manages clients, handles invoicing — replaced messy spreadsheets.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Tailwind'],
    category: 'Web App',
    live: 'https://mhcreationx.top',
    github: null,
    featured: false,
    number: '07',
  },
  {
    id: 'ai-chatbot',
    name: 'AI Chatbot',
    tagline: 'Multi-API conversational AI',
    description: 'Conversational chatbot using OpenAI, Anthropic Claude, and Google Gemini APIs. Multi-turn conversations, context management, and a clean chat UI.',
    tech: ['React', 'Node.js', 'OpenAI API', 'Claude API', 'Gemini API'],
    category: 'AI',
    live: null,
    github: null,
    featured: false,
    number: '08',
  },
  {
    id: 'saturday',
    name: 'Saturday',
    tagline: 'AI agent deployment framework',
    description: 'An AI agent framework that autonomously plans, scaffolds, and ships web projects. Telegram-controlled, runs on a VPS, handles end-to-end deployment.',
    tech: ['Node.js', 'Hermes AI', 'OpenRouter', 'Cloudflare', 'GitHub Actions'],
    category: 'Tools',
    live: null,
    github: 'https://github.com/nhprince/saturday',
    featured: false,
    number: '09',
  },
]

export const categories = ['All', 'Web App', 'E-Commerce', 'Design', 'AI', 'Tools']
