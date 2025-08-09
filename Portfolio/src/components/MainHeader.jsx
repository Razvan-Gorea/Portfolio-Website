import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { useState, useEffect } from 'react';

function MainHeader() {
  const { ref, isVisible } = useInViewAnimation(200);
  const [nameText, setNameText] = useState('');
  const [typewriterText, setTypewriterText] = useState('');
  
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
          if (devIndex >= devString.length) clearInterval(devInterval);
        }, 100);
      }
    }, 100);
    
    return () => clearInterval(nameInterval);
  }, [isVisible]);

  const nameComplete = nameText.length >= "Hey, I'm Razvan".length;

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center pt-40 px-4 transition-all duration-2000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <p className="text-black text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4">
        {nameText}{!nameComplete && <span className="animate-pulse">|</span>}
      </p>
      <p className="text-black text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-170">
        {typewriterText}{nameComplete && <span className="animate-pulse">|</span>}
      </p>
    </div>
  );
}

export default MainHeader;