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
  {
    title: "AI Image Detection Pipeline",
    description:
      "A multi-phase machine learning pipeline that classifies images as Real or AI-Generated, fusing 81 hand-crafted signal-processing features with deep EfficientNet-B3 CNN embeddings through an MLP fusion head.",
    technologies: ["Python", "PyTorch", "XGBoost", "Scikit-Learn"],
    github: "https://github.com/Razvan-Gorea/AI-Image-Detection-Project", // Add your GitHub link here
  },
  {
    title: "Waste Type Classification",
    description:
      "A deep learning project comparing four CNN architectures for classifying waste images into six categories, with systematic evaluation of preprocessing pipelines and data balancing strategies including SMOTE and DeepSMOTE.",
    technologies: ["Python", "PyTorch", "Fastai", "Scikit-Learn"],
    github: "https://github.com/Razvan-Gorea/Waste-Classification-Project", // Add your GitHub link here
  },
  {
    title: "Bitcoin Price Forecasting",
    description:
      "A time-series machine learning project forecasting Bitcoin closing prices using SARIMAX, XGBoost, and Random Forest models with lag-based feature engineering and a rolling walk-forward evaluation strategy.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    github: "https://github.com/Razvan-Gorea/Forecasting-Bitcoin", // Add your GitHub link here
  },
];

  return (
    <div
      ref={ref}
      className={`section-px transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="section-num">05</span>
        <div className="h-px flex-1 bg-[#2E2B27]" />
        <span className="section-label">Selected Projects</span>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {projects.map((project, index) => (
          <article key={index} className="card project-card group flex flex-col">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3
                className="font-display font-bold text-[#F2E9D8] leading-tight"
                style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)' }}
              >
                {project.title}
              </h3>

              <div className="flex gap-3 flex-shrink-0 pt-0.5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-link"
                  aria-label={`${project.title} on GitHub`}
                >
                  <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-link"
                    aria-label={`${project.title} live demo`}
                  >
                    <FaExternalLinkAlt className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-[#9C9285] text-body mb-5 leading-relaxed flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="tech-tag px-2.5 py-1 text-[#9C9285] border border-[#2E2B27]
                             transition-colors duration-200 group-hover:border-[#4A453D]"
                  style={{ borderRadius: '2px' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
