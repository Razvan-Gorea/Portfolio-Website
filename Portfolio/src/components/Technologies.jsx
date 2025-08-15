import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { FaPython, FaJs, FaJava, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiC, SiDjango, SiFastapi } from "react-icons/si";
import { BiData } from "react-icons/bi";
import { MdIntegrationInstructions } from "react-icons/md";

function Technologies() {
  const { ref, isVisible } = useInViewAnimation(1400);
  
  const skills = [
    { name: "Python", icon: FaPython },
    { name: "JavaScript", icon: FaJs },
    { name: "C", icon: SiC },
    { name: "Java", icon: FaJava },
    { name: "SQL", icon: BiData },
    { name: "React", icon: FaReact },
    { name: "Django", icon: SiDjango },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Docker", icon: FaDocker },
    { name: "Git", icon: FaGitAlt },
    { name: "CI/CD", icon: MdIntegrationInstructions }
  ];

  return (
    <>
      <div
        ref={ref}
        className={`flex flex-col items-start ml-16 sm:ml-24 md:ml-32 lg:ml-40 transition-all duration-2000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-black text-4xl text-left mb-4 font-bold">Skills</p>
        <div className="flex flex-wrap gap-3 justify-start mb-40 max-w-2xl">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="px-4 py-2 rounded-full border-2 bg-white border-gray-300 text-black font-medium flex items-center gap-2"
              >
                <IconComponent className="text-lg" />
                {skill.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Technologies;
