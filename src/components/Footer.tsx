export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/50 bg-[#050505] py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
            © 2026 NH Prince Prodhan
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
            Built with Next.js · Cloudflare Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
