import { useInViewAnimation } from "../hooks/useInViewAnimation";

function About() {
  const { ref, isVisible } = useInViewAnimation(600);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-start ml-16 sm:ml-24 md:ml-32 lg:ml-40 transition-all duration-2000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <p className="text-black text-4xl font-bold text-left mb-4">About</p>
      
      <p className="text-black text-xl text-left max-w-2xl mb-4">
        I'm Razvan, a full-stack developer from Dublin, Ireland.
      </p>
      
      <p className="text-black text-xl text-left max-w-2xl mb-15">
        I enjoy creating modern web applications using cutting-edge technologies.
        I have experience in creating RESTful APIs, developing responsive frontend interfaces, as well as creating scalable backend systems.
      </p>
    </div>
  );
}


export default About;