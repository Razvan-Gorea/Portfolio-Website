import { useInViewAnimation } from '../hooks/useInViewAnimation';

function Education() {
  const { ref, isVisible } = useInViewAnimation(1000);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-end px-6 sm:px-12 md:px-20 lg:px-32 transition-all duration-2000 ease-out ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}
    >
      <p className="text-black responsive-text-3xl text-right mb-4 font-bold">Education</p>
      <p className="text-black responsive-text-lg text-right mb-4 max-w-3xl">
        M.Sc. in Computing (Artifical intelligence) at Dublin City University (2025 - 2026)
      </p>
      
      <p className="text-black responsive-text-lg text-right mb-5 max-w-2xl">
        B.Sc. in Computer Science at Dublin City University (2021 - 2025)
      </p>
    </div>
  );
}

export default Education;