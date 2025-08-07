import { useState, useEffect, useRef } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <div 
        ref={ref}
        className={`flex flex-col items-center pt-20 px-4 transition-all duration-2000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-white text-3xl font-bold text-center mb-6">About</p>
        <p className="text-white text-xl text-center max-w-2xl mb-4">
          I'm Razvan, a full-stack developer from Dublin, Ireland.
        </p>
        <p className="text-white text-xl text-center max-w-2xl">
          I enjoy creating modern web applications using React, Node.js, and other cutting-edge technologies.
          I have experience in creating RESTFUL APIs, developing frontend interfaces, aswell as creating scalable backend systems.
        </p>
      </div>
    </>
  );
}
export default About;