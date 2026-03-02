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

            setTimeout(() => {
              const scrollString = 'Welcome!';
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
  const scrollComplete = scrollText.length >= 'Welcome!'.length;

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center pt-20 sm:pt-24 md:pt-32 lg:pt-[15vh] px-4"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="bg-shape absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-400/30 to-purple-500/20"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="bg-shape absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-rose-500/20"
          style={{ animationDelay: '-5s' }}
        />
        <div
          className="bg-shape absolute bottom-40 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-500/20"
          style={{ animationDelay: '-10s' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <p className="gradient-text responsive-text-4xl sm:responsive-text-5xl md:responsive-text-6xl font-bold text-center mb-4">
          {nameText}
          {!nameComplete && (
            <span className="cursor-blink text-indigo-500 responsive-text-3xl sm:responsive-text-4xl md:responsive-text-5xl">|</span>
          )}
        </p>
        <p className="gradient-text responsive-text-4xl sm:responsive-text-5xl md:responsive-text-6xl font-bold text-center mb-8">
          {typewriterText}
          {nameComplete && (
            <span className="cursor-blink text-purple-500 responsive-text-3xl sm:responsive-text-4xl md:responsive-text-5xl">|</span>
          )}
        </p>

        <div className="flex items-center justify-center gap-4 mb-[50vh] sm:mb-[60vh] md:mb-[70vh] lg:mb-[80vh]">
          <div className="relative">
            <p className="text-gray-700 responsive-text-lg sm:responsive-text-lg md:responsive-text-lg font-medium mt-16 sm:mt-20 md:mt-28 lg:mt-[12vh]">
              {scrollText}
              {scrollComplete && (
                <>
                  <span className="inline-block ml-2 animate-bounce">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 inline text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
