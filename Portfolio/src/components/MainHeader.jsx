import { useState, useEffect, useRef } from "react";

function MainHeader() {
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
        className={`flex flex-col items-center pt-40 px-4 transition-all duration-2000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Hey, I'm Razvan
        </p>
        <p className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Full-Stack Developer
        </p>
      </div>
    </>
  );
}
export default MainHeader;
