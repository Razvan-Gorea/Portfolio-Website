import { useInViewAnimation } from "../hooks/useInViewAnimation";

function About() {
  const { ref, isVisible } = useInViewAnimation(600);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-start px-6 sm:px-12 md:px-20 lg:px-32 pt-20 transition-all duration-2000 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
    >
      <p className="text-black responsive-text-3xl font-bold text-left mb-4 pt-10">About Me</p>
      
      <p className="text-black responsive-text-lg text-left max-w-2xl mb-4">
        I'm Razvan, a full-stack developer from Dublin, Ireland, with a direct approach to turning unique product ideas into reality. My university background gave me the foundation, but what really drives me is executing solutions that tackle real-world problems head-on.
      </p>
      
      <p className="text-black responsive-text-lg text-left max-w-2xl mb-4">
        I'm passionate about React.js and Next.js for crafting seamless user experiences, paired with Python-powered such as FastAPI for robust, scalable systems. My approach is straightforward: break down complex problems step by step until they're solved. No fluff, just results.
      </p>
      
      <p className="text-black responsive-text-lg text-left max-w-2xl mb-10">
        When I'm not coding, you'll find me diving into music or gaming. Both help me fuel my creativity and problem-solving mindset. I believe the best software comes from understanding real needs and building something that actually matters, not just another app for the sake of it.
      </p>
    </div>
  );
}


export default About;