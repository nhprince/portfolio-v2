export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-8" style={{ backgroundColor: "#050505" }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-widest text-neutral-500 font-mono">© {new Date().getFullYear()} NH Prince Prodhan</p>
        <p className="text-xs uppercase tracking-widest text-neutral-500 font-mono">Built with Next.js · Cloudflare Pages</p>
      </div>
    </footer>
  );
}
