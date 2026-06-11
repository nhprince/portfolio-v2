export default function Footer() {
  return (
    <footer className="border-t border-[#222] py-8 bg-[#050505]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#666] font-mono">
          © {new Date().getFullYear()} NH Prince Prodhan
        </p>
        <div className="flex items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#666] font-mono">
            Built with Next.js · Cloudflare Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
