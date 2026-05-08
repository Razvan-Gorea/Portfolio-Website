import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const { ref, isVisible } = useInViewAnimation(200);

  const projects = [
    {
      title: "Full Stack Multi-Agent Application",
      description:
        "An intelligent multi-agent RAG system that unifies fragmented data sources into a centralized vector database, enabling smart information retrieval across SQL databases, APIs, and document stores.",
      technologies: ["Python", "JavaScript", "FastAPI", "LangGraph", "React", "SQL", "Docker", "GitLab CI"],
      github: "https://github.com/Razvan-Gorea/LangGraph-Multi-Agent-System",
    },
    {
      title: "NASA Risk Dashboard",
      description:
        "An interactive dashboard leveraging NASA's Near Earth Objects API to visualize asteroid risk assessments with advanced filtering, search capabilities, and real-time data visualization.",
      technologies: ["JavaScript", "HTML", "Tailwind CSS", "React", "Node.js", "Express", "Git"],
      github: "https://github.com/Razvan-Gorea/Asteroid-Risk-Assessment-Dashboard",
      demo: "https://asteroid-risk-assessment-dashboard.onrender.com/",
    },
    {
      title: "Custom Unix Shell",
      description:
        "A custom shell implementation in C that emulates bash functionality on Linux, providing a full-featured CLI with pipelines, I/O redirection, and background process execution.",
      technologies: ["C"],
      github: "https://github.com/Razvan-Gorea/Shell-Project",
    },
  ];

  return (
    <div
      ref={ref}
      className={`px-6 sm:px-12 md:px-20 lg:px-32 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="section-num">04</span>
        <div className="h-px flex-1 bg-[#1C1C1C]" />
        <span className="section-label">Selected Projects</span>
      </div>

      {/* Projects list */}
      <div className="mb-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card group border-t border-[#1C1C1C] last-of-type:border-b py-8 sm:py-10
                       transition-colors duration-300"
            style={{
              marginLeft: '-1rem',
              marginRight: '-1rem',
              paddingLeft: '1rem',
              paddingRight: '1rem',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(90deg, rgba(201,255,71,0.03) 0%, transparent 45%)'}
            onMouseLeave={e => e.currentTarget.style.background = ''}
          >
            <div className="flex items-start">
              {/* Content */}
              <div className="flex-1 min-w-0 pt-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3
                    className="font-display font-bold text-[#EDEDED] leading-tight
                               group-hover:text-white transition-colors duration-300"
                    style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)' }}
                  >
                    {project.title}
                  </h3>

                  <div className="flex gap-3 flex-shrink-0 pt-0.5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="accent-link"
                      aria-label="GitHub repository"
                    >
                      <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="accent-link"
                        aria-label="Live demo"
                      >
                        <FaExternalLinkAlt className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[#848484] responsive-text-base mb-5 leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="tech-tag px-2.5 py-1 text-[#707070] border border-[#1C1C1C]
                                 transition-colors duration-200 group-hover:border-[#242424]"
                      style={{ borderRadius: '2px' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
