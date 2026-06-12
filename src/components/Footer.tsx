export default function Footer() {
  return (
    <footer className="bg-[#0c0a1a] py-12">
      {/* Gradient accent line */}
      <div className="h-[2px] w-full mb-12" style={{ background: 'linear-gradient(90deg, #7c3aed, #a855f7, #ec4899)' }} />
      <div className="max-w-[1560px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">
            © {new Date().getFullYear()} NH Prince Prodhan
          </p>
          <div className="flex items-center gap-8">
            <a href="#projects" className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white/80 transition-colors font-mono">Work</a>
            <a href="#about" className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white/80 transition-colors font-mono">About</a>
            <a href="#blog" className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white/80 transition-colors font-mono">Blog</a>
            <a href="#contact" className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white/80 transition-colors font-mono">Contact</a>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">
            Made with Next.js & Cloudflare
          </p>
        </div>
      </div>
    </footer>
  )
}
