import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { useState, useEffect } from 'react';

function MainHeader() {
  const { ref, isVisible } = useInViewAnimation(200);
  const [nameText, setNameText] = useState('');
  const [typewriterText, setTypewriterText] = useState('');
  const [scrollText, setScrollText] = useState('');
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const nameString = "Hey, I'm Razvan";
    let nameIndex = 0;
    
    const nameInterval = setInterval(() => {
      setNameText(nameString.slice(0, ++nameIndex));
      
      if (nameIndex >= nameString.length) {
        clearInterval(nameInterval);
        
        const devString = 'Full-Stack Developer';
        let devIndex = 0;
        
        const devInterval = setInterval(() => {
          setTypewriterText(devString.slice(0, ++devIndex));
          if (devIndex >= devString.length) {
            clearInterval(devInterval);
            
            // Start scroll text after a delay
            setTimeout(() => {
              const scrollString = 'Learn About Me!';
              let scrollIndex = 0;
              
              const scrollInterval = setInterval(() => {
                setScrollText(scrollString.slice(0, ++scrollIndex));
                if (scrollIndex >= scrollString.length) clearInterval(scrollInterval);
              }, 100);
            }, 1000);
          }
        }, 100);
      }
    }, 100);
    
    return () => clearInterval(nameInterval);
  }, [isVisible]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const isScrollingDown = scrollY > lastScrollY;
      
      // Different fade parameters for scrolling up vs down
      const fadeStartDown = windowHeight * 0.3; // Start fading out earlier
      const fadeEndDown = windowHeight * 0.7;   // End fading out sooner
      
      const fadeStartUp = windowHeight * 0.6;   // Start fading in later
      const fadeEndUp = windowHeight * 0.1;     // End fading in earlier (at top)
      
      let opacity;
      
      if (isScrollingDown) {
        // Scrolling down - quick fade out
        if (scrollY <= fadeStartDown) {
          opacity = 1;
        } else if (scrollY >= fadeEndDown) {
          opacity = 0;
        } else {
          // Quick fade with exponential easing
          const progress = (scrollY - fadeStartDown) / (fadeEndDown - fadeStartDown);
          opacity = 1 - Math.pow(progress, 0.5); // Square root for quicker fade
        }
      } else {
        // Scrolling up - slow fade in
        if (scrollY <= fadeEndUp) {
          opacity = 1;
        } else if (scrollY >= fadeStartUp) {
          opacity = 0;
        } else {
          // Slow fade with cubic easing
          const progress = (scrollY - fadeEndUp) / (fadeStartUp - fadeEndUp);
          opacity = 1 - Math.pow(progress, 3); // Cubic for slower fade
        }
      }
      
      setScrollOpacity(opacity);
      setLastScrollY(scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const nameComplete = nameText.length >= "Hey, I'm Razvan".length;
  const scrollComplete = scrollText.length >= 'Learn About Me!'.length;

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center pt-45 px-4 transition-all duration-2000 ease-out ${
        isVisible ? "translate-y-0" : "translate-y-8"
      }`}
      style={{ opacity: scrollOpacity }}
    >
      <p className="text-black text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4">
        {nameText}{!nameComplete && <span className="animate-pulse">|</span>}
      </p>
      <p className="text-black text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
        {typewriterText}{nameComplete && <span className="animate-pulse">|</span>}
      </p>
      
      <div className="flex items-center justify-center gap-4 mb-170">
        <p className="text-black text-lg font-medium mt-100">
          {scrollText}{scrollComplete && <span className="animate-pulse">|</span>}
        </p>
      </div>
    </div>
  );
}

export default MainHeader;