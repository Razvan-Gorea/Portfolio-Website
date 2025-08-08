import { useInViewAnimation } from '../hooks/useInViewAnimation';

function MainHeader() {
  const { ref, isVisible } = useInViewAnimation(200);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center pt-40 px-4 transition-all duration-2000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <p className="text-black text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
        Hey, I'm Razvan
      </p>
      <p className="text-black text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        Full-Stack Developer
      </p>
    </div>
  );
}

export default MainHeader;