import { LuLinkedin } from "react-icons/lu";
import { RiGithubLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";

function NavigationBar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-5 glass-dark"
      style={{ borderRadius: '3px' }}
    >
      <div className="px-5 sm:px-6">
        <div className="flex items-center gap-1 py-2.5">
          <button
            onClick={scrollToTop}
            className="nav-icon"
            aria-label="Scroll to top"
          >
            <FiHome className="w-4 h-4" />
          </button>

          <div className="w-px h-3.5 bg-[#1C1C1C] mx-1.5" />

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
    </nav>
  );
}

export default NavigationBar;
