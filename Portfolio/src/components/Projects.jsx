import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const { ref, isVisible } = useInViewAnimation(1600);

  const projects = [
    {
      title: "Full Stack Multi-Agent Application",
      description: "An intelligent multi-agent RAG system that unifies fragmented data sources into a centralized vector database, enabling smart information retrieval across SQL databases, APIs, and document stores.",
      technologies: ["Python", "JavaScript", "HTML/CSS", "FastAPI", "LangGraph", "React", "SQL", "Docker", "Git", "Gitlab CI"],
      github: "https://github.com/Razvan-Gorea/LangGraph-Multi-Agent-System",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      title: "NASA Risk Dashboard",
      description: "An interactive dashboard leveraging NASA's Near Earth Objects API to visualize asteroid risk assessments with advanced filtering, search capabilities, and real-time data visualization.",
      technologies: ["JavaScript", "HTML", "Tailwind CSS", "React", "Node.js", "Express", "Git"],
      github: "https://github.com/Razvan-Gorea/Asteroid-Risk-Assessment-Dashboard",
      demo: "https://asteroid-risk-assessment-dashboard.onrender.com/",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Custom Unix Shell",
      description: "This is a custom shell implementation written in C that emulates bash functionality on Linux. The project creates an executable called myshell that provides a command-line interface similar to bash.",
      technologies: ["C"],
      github: "https://github.com/Razvan-Gorea/Shell-Project",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center transition-all mt-32 sm:mt-40 md:mt-48 lg:mt-[20vh] duration-2000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
    >
      <p className="gradient-text responsive-text-3xl text-center pt-16 sm:pt-20 md:pt-24 lg:pt-[8vh] mb-12 font-bold">
        My Projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl px-4 mb-20 sm:mb-24 md:mb-32 lg:mb-[10vh]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative card-hover glass rounded-2xl p-6 overflow-hidden"
          >
            {/* Gradient accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

            {/* Hover gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-gray-800 responsive-text-lg font-semibold pr-4 group-hover:text-gray-900 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 flex-shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-600 transition-all duration-300 hover:scale-110"
                    aria-label="GitHub repository"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-indigo-600 transition-all duration-300 hover:scale-110"
                      aria-label="Live demo"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 responsive-text-base mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-full border border-gray-200/50 font-medium hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
