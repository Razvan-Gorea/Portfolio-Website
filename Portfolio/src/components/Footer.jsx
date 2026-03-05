function Footer() {
  return (
    <footer className="px-6 sm:px-12 md:px-20 lg:px-32 py-10">
      <div className="sep mb-8" />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p
            className="font-display font-bold text-[#EDEDED] uppercase tracking-widest"
            style={{ fontSize: '0.9375rem' }}
          >
            Razvan Gorea
          </p>
          <p className="text-[#404040] mt-1" style={{ fontSize: '0.8125rem', letterSpacing: '0.1em' }}>
            Full-Stack Developer · Dublin, Ireland
          </p>
        </div>

        <div className="flex items-center gap-6">
          <p className="section-label" style={{ color: '#303030' }}>
            Built with React & Tailwind CSS
          </p>
          <p className="section-label" style={{ color: '#303030' }}>
            © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
