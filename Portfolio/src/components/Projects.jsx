import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const { ref, isVisible } = useInViewAnimation(1600);
  
  const projects = [
    {
      title: "Full Stack Multi-Agent Application",
      description: "An intelligent multi-agent RAG system that unifies fragmented data sources into a centralized vector database, enabling smart information retrieval across SQL databases, APIs, and document stores.",
      technologies: ["Python", "JavaScript", "HTML/CSS","FastAPI", "LangGraph", "JavaScript", "React", "SQL", "Docker", "Git", "Gitlab CI"],
      github: "https://github.com/Razvan-Gorea/LangGraph-Multi-Agent-System"
    },
    {
      title: "NASA Risk Dashboard",
      description: "An interactive dashboard leveraging NASA's Near Earth Objects API to visualize asteroid risk assessments with advanced filtering, search capabilities, and real-time data visualization.",
      technologies: ["JavaScript", "HTML", "Tailwind CSS", "React", "Node.js", "Express", "Git"],
      github: "https://github.com/Razvan-Gorea/Asteroid-Risk-Assessment-Dashboard",
      demo: "https://asteroid-risk-assessment-dashboard.onrender.com/"
    },
    {
      title: "Custom Unix Shell",
      description: "This is a custom shell implementation written in C that emulates bash functionality on Linux. The project creates an executable called myshell that provides a command-line interface similar to bash.",
      technologies: ["C"],
      github: "https://github.com/Razvan-Gorea/Shell-Project",
    }
  ];

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center transition-all mt-32 sm:mt-40 md:mt-48 lg:mt-[20vh] duration-2000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <p className="text-black responsive-text-3xl text-center pt-16 sm:pt-20 md:pt-24 lg:pt-[8vh] mb-8 font-bold">My Projects</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl px-4 mb-20 sm:mb-24 md:mb-32 lg:mb-[10vh]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-xl p-6 border border-gray-300 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-black responsive-text-lg font-medium">{project.title}</h3>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label="GitHub repository"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="text-gray-600 hover:text-black transition-colors"
                    aria-label="Live demo"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-gray-700 responsive-text-base mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-xs sm:text-sm bg-gray-100 text-gray-800 rounded-full border border-gray-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;