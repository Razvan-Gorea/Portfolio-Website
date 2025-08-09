import { useInViewAnimation } from '../hooks/useInViewAnimation';

function Education() {
  const { ref, isVisible } = useInViewAnimation(1000);

  return (
    <div
      ref={ref}
      className={`transition-all duration-2000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <p className="text-black text-3xl text-center mb-4 font-bold">Education</p>
      <p className="text-black text-xl text-center mb-20">
        Bachelor of Science in Computer Science at Dublin City University (2021 - 2025)
      </p>
    </div>
  );
}

export default Education;