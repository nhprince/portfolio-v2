const socialLinks = [
  { name: "GitHub", url: "https://github.com/nhprince", description: "Open Source Projects", icon: "⟠" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/nh-prince-prodhan-a1b46a399", description: "Professional Network", icon: "in" },
  { name: "Telegram", url: "https://t.me/nhprince", description: "Direct Message", icon: "✈" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32" style={{ backgroundColor: "rgba(124, 58, 237, 0.03)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)" }}>
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: "var(--accent-from)" }}>Get In Touch</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            LET'S <span className="text-gradient">WORK TOGETHER</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>Ready to bring your project to life? Let's discuss how I can help.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 stagger-children">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="group glass-card p-6 text-center transition-all duration-300 hover:shadow-[0_20px_60px_rgba(100,80,200,0.22)]">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors" style={{ background: "rgba(124, 58, 237, 0.08)" }}>
                <span className="text-2xl" style={{ color: "var(--accent-from)" }}>{link.icon}</span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>{link.name}</h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>{link.description}</p>
            </a>
          ))}
        </div>

        <div className="max-w-2xl mx-auto reveal">
          <div className="glass-card p-8 md:p-10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200" style={{ background: "rgba(255, 255, 255, 0.7)", border: "1px solid rgba(124, 58, 237, 0.15)", color: "var(--text-primary)" }} placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>Email</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200" style={{ background: "rgba(255, 255, 255, 0.7)", border: "1px solid rgba(124, 58, 237, 0.15)", color: "var(--text-primary)" }} placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>Message</label>
                <textarea required rows={5} className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 resize-none" style={{ background: "rgba(255, 255, 255, 0.7)", border: "1px solid rgba(124, 58, 237, 0.15)", color: "var(--text-primary)" }} placeholder="Tell me about your project..." />
              </div>
              <button type="submit" className="w-full py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" style={{ background: "var(--accent-gradient)", boxShadow: "0 8px 32px rgba(124, 58, 237, 0.3)" }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
