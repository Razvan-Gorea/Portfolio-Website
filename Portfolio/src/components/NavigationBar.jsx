import { useState } from "react";
import { LuLinkedin } from "react-icons/lu";
import { RiGithubLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { HiBars3, HiXMark } from "react-icons/hi2";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#technologies", label: "Technologies" },
  { href: "#projects", label: "Projects" },
];

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass-dark">
      <div className="section-px">
        <div className="flex items-center justify-between py-4">
          <button onClick={scrollToTop} className="nav-icon" aria-label="Scroll to top">
            <FiHome className="w-4 h-4" />
          </button>

          {/* Desktop links + social icons */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="w-px h-3.5 bg-[#2E2B27]" />

            <div className="flex items-center gap-1">
              <a
                href="https://github.com/Razvan-Gorea"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
                aria-label="GitHub"
              >
                <RiGithubLine className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/razvan-gorea-2a7219296/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
                aria-label="LinkedIn"
              >
                <LuLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="nav-icon"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <HiXMark className="w-5 h-5" /> : <HiBars3 className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="nav-mobile-panel glass-dark md:hidden">
          <div className="section-px flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu} className="nav-link py-2">
                {link.label}
              </a>
            ))}

            <div className="sep my-2" />

            <div className="flex items-center gap-1">
              <a
                href="https://github.com/Razvan-Gorea"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
                aria-label="GitHub"
                onClick={closeMenu}
              >
                <RiGithubLine className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/razvan-gorea-2a7219296/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
                aria-label="LinkedIn"
                onClick={closeMenu}
              >
                <LuLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavigationBar;
