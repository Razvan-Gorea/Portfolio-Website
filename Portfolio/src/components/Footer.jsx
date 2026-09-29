function Footer() {
  return (
    <footer className="section-px py-10">
      <div className="sep mb-8" />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p
            className="font-display font-bold text-[#14171C] uppercase tracking-widest"
            style={{ fontSize: '0.9375rem' }}
          >
            Razvan Gorea
          </p>
          <p className="text-[#726C5C] mt-1" style={{ fontSize: '0.8125rem', letterSpacing: '0.1em' }}>
            Full-Stack Developer · Dublin, Ireland
          </p>
        </div>

        <div className="flex items-center gap-6">
          <p className="section-label" style={{ color: '#A79E88' }}>
            Built with React & Tailwind CSS
          </p>
          <p className="section-label" style={{ color: '#A79E88' }}>
            © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
