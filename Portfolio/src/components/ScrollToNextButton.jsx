import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

function ScrollToNextButton() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['top', 'about', 'projects'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Get all section elements
      const sectionElements = sections.map(id => document.getElementById(id));
      
      // Find current section based on scroll position
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && scrollPosition >= element.offsetTop) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSectionIndex = Math.min(currentSection + 1, sections.length - 1);
    const nextSectionId = sections[nextSectionIndex];
    const element = document.getElementById(nextSectionId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Hide button when on the last section
  if (currentSection >= sections.length - 1) {
    return null;
  }

  return (
    <button
      onClick={scrollToNextSection}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-md rounded-xl p-4 sm:p-5 md:p-6 text-black hover:text-slate-400 transition-colors hover:bg-gray-50"
    >
      <FaChevronDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
    </button>
  );
}

export default ScrollToNextButton;