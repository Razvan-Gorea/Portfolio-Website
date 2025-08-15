import { useInViewAnimation } from '../hooks/useInViewAnimation';

function Education() {
  const { ref, isVisible } = useInViewAnimation(1000);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-end mr-16 sm:mr-24 md:mr-32 lg:mr-40 transition-all duration-2000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <p className="text-black text-4xl text-right mb-4 font-bold">Education</p>
      <p className="text-black text-xl text-right mb-20 max-w-2xl">
        B.Sc. in Computer Science at Dublin City University (2021 - 2025)
      </p>
    </div>
  );
}

export default Education;