import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

function ScrollToNextButton() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['top', 'about', 'projects'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sectionElements = sections.map(id => document.getElementById(id));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && scrollPosition >= element.offsetTop) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextIndex = Math.min(currentSection + 1, sections.length - 1);
    const element = document.getElementById(sections[nextIndex]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (currentSection >= sections.length - 1) return null;

  return (
    <button
      onClick={scrollToNextSection}
      className="fixed bottom-7 left-1/2 -translate-x-1/2 z-50 glass-dark
                 p-3 text-[#505050] hover:text-[#C9FF47] hover:border-[#C9FF47]
                 transition-all duration-200 group"
      style={{ borderRadius: '2px' }}
      aria-label="Scroll to next section"
    >
      <FaChevronDown className="w-3.5 h-3.5 group-hover:animate-bounce" />
    </button>
  );
}

export default ScrollToNextButton;
