export default function Footer() {
  return (
    <footer className="py-8" style={{ borderTop: "1px solid rgba(124, 58, 237, 0.1)", background: "rgba(124, 58, 237, 0.02)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)" }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-[family-name:var(--font-display)] text-xl tracking-wider" style={{ color: "var(--text-primary)" }}>
            <span className="text-gradient">P</span>.
          </span>
          <p className="text-sm text-center" style={{ color: "var(--text-muted)" }}>© {new Date().getFullYear()} NH Prince Prodhan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/nhprince" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--accent-from)]" style={{ color: "var(--text-muted)" }} aria-label="GitHub">⟠</a>
            <a href="https://www.linkedin.com/in/nh-prince-prodhan-a1b46a399" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#0077b5]" style={{ color: "var(--text-muted)" }} aria-label="LinkedIn">in</a>
            <a href="https://t.me/nhprince" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#0088cc]" style={{ color: "var(--text-muted)" }} aria-label="Telegram">✈</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
