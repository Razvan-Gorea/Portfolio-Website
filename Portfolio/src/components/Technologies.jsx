import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { FaPython, FaJs, FaJava, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiC, SiDjango, SiFastapi, SiExpress } from "react-icons/si";
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
    { name: "Express", icon: SiExpress },
    { name: "Docker", icon: FaDocker },
    { name: "Git", icon: FaGitAlt },
    { name: "CI/CD", icon: MdIntegrationInstructions }
  ];

  return (
    <>
      <div
        ref={ref}
        className={`flex flex-col items-start transition-all duration-2000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
      >
        <p className="gradient-text responsive-text-3xl text-left mb-6 font-bold">My Skills</p>
        <div className="flex flex-wrap gap-3 justify-start max-w-2xl">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="skill-pill px-4 py-2 rounded-full border-2 bg-white/80 border-gray-200 text-gray-700 responsive-text-lg flex items-center gap-2 cursor-default"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <IconComponent className="responsive-text-lg" />
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
