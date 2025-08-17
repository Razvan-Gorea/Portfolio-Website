import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { useState, useEffect } from 'react';

function MainHeader() {
  const { ref, isVisible } = useInViewAnimation(200);
  const [nameText, setNameText] = useState('');
  const [typewriterText, setTypewriterText] = useState('');
  const [scrollText, setScrollText] = useState('');
  
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


  const nameComplete = nameText.length >= "Hey, I'm Razvan".length;
  const scrollComplete = scrollText.length >= 'Learn About Me!'.length;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center pt-45 px-4"
    >
      <p className="text-black text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4">
        {nameText}{!nameComplete && <span className="animate-pulse text-3xl sm:text-4xl md:text-5xl">|</span>}
      </p>
      <p className="text-black text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
        {typewriterText}{nameComplete && <span className="animate-pulse text-3xl sm:text-4xl md:text-5xl">|</span>}
      </p>
      
      <div className="flex items-center justify-center gap-4 mb-170">
        <p className="text-black text-lg font-medium mt-100">
          {scrollText}{scrollComplete && <span className="animate-pulse text-base">|</span>}
        </p>
      </div>
    </div>
  );
}

export default MainHeader;