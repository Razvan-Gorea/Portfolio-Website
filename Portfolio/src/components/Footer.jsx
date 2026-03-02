function Footer() {
  return (
    <footer className="relative py-12 mt-10">
      {/* Gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />

      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 responsive-text-lg font-medium">
          Built with{' '}
          <span className="gradient-text">React</span>
          {' '}&{' '}
          <span className="gradient-text">Tailwind CSS</span>
        </p>
        <p className="text-gray-400 text-sm mt-2">
          © 2025 Razvan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
