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
              const scrollString = 'Welcome';
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
  const scrollComplete = scrollText.length >= 'Welcome'.length;

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex flex-col px-6 sm:px-12 md:px-20 lg:px-32 pt-15 pb-30"
    >
      {/* Terracotta atmospheric glow behind hero text */}
      <div className="hero-glow" aria-hidden="true" />

      {/* Top meta bar */}
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-5">
          <span className="section-label">Portfolio · 2026</span>
          <span className="section-label">Dublin, Ireland</span>
        </div>
        <div className="sep" />
      </div>

      {/* Spacer pushes hero to lower half of viewport */}
      <div className="flex-1" />

      {/* Hero text */}
      <div className="mb-8 sm:mb-10 relative z-10">
        <p className="hero-text">
          {nameText}
          {!nameComplete && (
            <span className="cursor-blink">_</span>
          )}
        </p>
      </div>

      {/* Accent separator */}
      <div className="sep-accent mb-5 sm:mb-6 relative z-10" />

      {/* Subtitle row */}
      <div className="flex items-center justify-between gap-4 relative z-10">
        <p
          className="font-display font-semibold uppercase text-[#C1603C]"
          style={{
            fontSize: 'clamp(0.875rem, 2.2vw, 1.25rem)',
            letterSpacing: '0.22em',
          }}
        >
          {typewriterText}
          {nameComplete && !scrollComplete && (
            <span className="cursor-blink">_</span>
          )}
        </p>

        <div className="flex items-center gap-2 flex-shrink-0">
          <span
            className="section-label"
            style={{ color: scrollComplete ? '#14171C' : '#726C5C' }}
          >
            {scrollText}
          </span>
          {scrollComplete && (
            <span
              className="animate-bounce text-[#C1603C] text-xs"
              style={{ letterSpacing: '0.1em' }}
            >
              ↓
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
