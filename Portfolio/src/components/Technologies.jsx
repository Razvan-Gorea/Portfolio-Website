import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { FaPython, FaJs, FaJava, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiC, SiDjango, SiFastapi, SiExpress } from "react-icons/si";
import { BiData } from "react-icons/bi";
import { MdIntegrationInstructions } from "react-icons/md";

function Technologies() {
  const { ref, isVisible } = useInViewAnimation(750);

  const skills = [
    { name: "Python",     icon: FaPython },
    { name: "JavaScript", icon: FaJs },
    { name: "C",          icon: SiC },
    { name: "Java",       icon: FaJava },
    { name: "SQL",        icon: BiData },
    { name: "React",      icon: FaReact },
    { name: "Django",     icon: SiDjango },
    { name: "FastAPI",    icon: SiFastapi },
    { name: "Express",    icon: SiExpress },
    { name: "Docker",     icon: FaDocker },
    { name: "Git",        icon: FaGitAlt },
    { name: "CI/CD",      icon: MdIntegrationInstructions },
  ];

  return (
    <div
      ref={ref}
      className={`flex flex-col transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="flex items-center gap-3 mb-8">
        <span className="section-num">03</span>
        <div className="h-px flex-1 bg-[#1C1C1C]" />
        <span className="section-label">Skills</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={skill.name}
              className="skill-chip px-3 py-1.5 flex items-center gap-1.5"
            >
              <IconComponent className="w-3 h-3 flex-shrink-0" />
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Technologies;
