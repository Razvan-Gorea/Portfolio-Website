import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const { ref, isVisible } = useInViewAnimation(1600);
  
  const projects = [
    {
      title: "Full Stack Multi-Agent Application",
      description: "A multi-agent Retrieval Augmented Generation (RAG) system that centralizes fragmented data stores (SQL databases, document stores, etc.) into a unified vector database for intelligent information retrieval.",
      technologies: ["Python", "FastAPI", "LangGraph", "JavaScript", "React", "SQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Ireland Hiking Web Application", 
      description: "A hiking web application that shows walking, jogging and cycling trails in Ireland. Each trail also displays the length along with a difficulty rating.",
      technologies: ["JavaScript", "React", "Python", "Django", "Leaflet"],
      github: "#",
      demo: "#"
    },
    {
      title: "NASA Risk Assessment Dashboard",
      description: "A web based dashboard that utilizes NASA's public Near Earth Objects API to display risk assessments. The dashboard also supports individual lookups of near earth objects, filters and visualizations of data.",
      technologies: ["JavaScript", "React", "Node.js", "Express"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center transition-all mt-50 duration-2000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <p className="text-black text-4xl text-center mb-8 font-bold">Browse My Projects</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl px-4 mb-40">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-black text-2xl font-bold">{project.title}</h3>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label="GitHub repository"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href={project.demo}
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label="Live demo"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full border border-gray-300 font-medium"
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