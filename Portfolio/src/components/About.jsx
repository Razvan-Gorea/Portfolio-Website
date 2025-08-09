import { useInViewAnimation } from "../hooks/useInViewAnimation";

function About() {
  const { ref, isVisible } = useInViewAnimation(600);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center transition-all duration-2000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <p className="text-black text-3xl font-bold text-center mb-4">About</p>
      
      <p className="text-black text-xl text-center max-w-2xl mb-4">
        I'm Razvan, a full-stack developer from Dublin, Ireland.
      </p>
      
      <p className="text-black text-xl text-center max-w-2xl mb-15">
        I enjoy creating modern web applications using cutting-edge technologies.
        I have experience in creating RESTful APIs, developing frontend interfaces, as well as creating scalable backend systems.
      </p>
    </div>
  );
}


export default About;