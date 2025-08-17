import { useInViewAnimation } from "../hooks/useInViewAnimation";

function About() {
  const { ref, isVisible } = useInViewAnimation(600);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-start ml-20 sm:ml-32 md:ml-40 lg:ml-48 pt-30 transition-all duration-2000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <p className="text-black text-4xl font-bold text-left mb-4">About</p>
      
      <p className="text-black text-xl text-left max-w-2xl mb-4">
        I'm Razvan, a full-stack developer from Dublin, Ireland. What I love the most about software development is the problem-solving aspect. Taking a complex challenge and stepping through it piece by piece until a solution has been created.
      </p>
      
      <p className="text-black text-xl text-left max-w-2xl mb-15">
        I enjoy creating modern web applications using cutting-edge technologies, with experience in building RESTful APIs, responsive frontends, and scalable backend systems. Each project is a brand new puzzle to solve, and I find that incredibly rewarding.
      </p>
    </div>
  );
}


export default About;