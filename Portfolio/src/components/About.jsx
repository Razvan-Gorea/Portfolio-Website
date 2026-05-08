import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi2";

function About() {
  const { ref, isVisible } = useInViewAnimation(300);

  return (
    <div
      ref={ref}
      className={`flex flex-col transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
      }`}
    >
      {/* Section identifier */}
      <div className="flex items-center gap-3 mb-8">
        <span className="section-num">01</span>
        <div className="h-px flex-1 bg-[#1C1C1C]" />
        <span className="section-label">About Me</span>
      </div>

      {/* Bio */}
      <div className="space-y-5 mb-10">
        <p className="text-[#A0A0A0] responsive-text-lg leading-relaxed">
          I'm a Computer Science graduate from Dublin City University, currently completing a{' '}
          <span className="text-[#EDEDED] font-medium">Master's in Artificial Intelligence</span>.
          I build full-stack applications and intelligent systems from React frontends and Python
          APIs to LLM-powered agents and ML pipelines.
        </p>
        <p className="text-[#A0A0A0] responsive-text-lg leading-relaxed">
          I care about clean architecture, thoughtful UX, and software that solves real problems.
          Currently seeking graduate roles in{' '}
          <span className="text-[#EDEDED] font-medium">software engineering</span> or{' '}
          <span className="text-[#EDEDED] font-medium">applied AI</span>.
        </p>
      </div>

      {/* Currently block */}
      <div
        className="border border-[#1C1C1C] p-4 mb-10"
        style={{ borderRadius: '2px', background: 'rgba(201,255,71,0.02)' }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#C9FF47] flex-shrink-0"
            style={{ boxShadow: '0 0 6px rgba(201,255,71,0.7)' }}
          />
          <span className="section-label" style={{ color: '#C9FF47' }}>Currently</span>
        </div>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span
              className="text-[#C9FF47] flex-shrink-0"
              style={{ fontSize: '0.5rem', marginTop: '0.35rem' }}
            >▸</span>
            <span className="text-[#A0A0A0]" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
              MSc Artificial Intelligence @ Dublin City University — expected Oct 2026
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span
              className="text-[#C9FF47] flex-shrink-0"
              style={{ fontSize: '0.5rem', marginTop: '0.35rem' }}
            >▸</span>
            <span className="text-[#A0A0A0]" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
              Open to graduate opportunities in software engineering &amp; applied AI
            </span>
          </li>
        </ul>
      </div>

      {/* Experience */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="section-label">Experience</span>
          <div className="h-px flex-1 bg-[#1C1C1C]" />
        </div>

        <div className="group flex gap-4 py-4 border-t border-b border-[#1C1C1C]">
          <div
            className="mt-0.5 p-1.5 border border-[#1C1C1C] text-[#848484] flex-shrink-0
                       group-hover:border-[#C9FF47] group-hover:text-[#C9FF47] transition-all duration-300"
            style={{ borderRadius: '2px' }}
          >
            <HiBriefcase className="w-3.5 h-3.5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <p className="text-[#EDEDED] responsive-text-base font-semibold leading-snug">
                Software Developer
              </p>
              <span className="section-label whitespace-nowrap flex-shrink-0 pt-0.5">
                Apr — Jun 2024
              </span>
            </div>
            <p
              className="text-[#C9FF47] font-medium mt-1"
              style={{ fontSize: '0.8125rem', letterSpacing: '0.1em' }}
            >
              Insight SFI Research Centre
            </p>
            <p className="text-[#737373] mt-1.5" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
              Researched multi-agent systems, prototyped Python solutions with Streamlit, Ollama,
              and pandas, and presented findings in bi-weekly stakeholder meetings.
            </p>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center gap-5 pb-14 lg:pb-0">
        <a
          href="https://github.com/Razvan-Gorea"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[#686868] hover:text-[#C9FF47] transition-colors duration-200"
          style={{ fontSize: '0.8125rem', letterSpacing: '0.04em', fontFamily: "'JetBrains Mono', monospace" }}
        >
          <FaGithub className="w-3.5 h-3.5" />
          GitHub
        </a>
        <span className="text-[#2A2A2A]">/</span>
        <a
          href="https://www.linkedin.com/in/razvan-gorea-2a7219296/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[#686868] hover:text-[#C9FF47] transition-colors duration-200"
          style={{ fontSize: '0.8125rem', letterSpacing: '0.04em', fontFamily: "'JetBrains Mono', monospace" }}
        >
          <FaLinkedin className="w-3.5 h-3.5" />
          LinkedIn
        </a>
        <span className="text-[#2A2A2A]">/</span>
        <a
          href="mailto:razvangorea7@gmail.com"
          className="flex items-center gap-1.5 text-[#686868] hover:text-[#C9FF47] transition-colors duration-200"
          style={{ fontSize: '0.8125rem', letterSpacing: '0.04em', fontFamily: "'JetBrains Mono', monospace" }}
        >
          <FaEnvelope className="w-3.5 h-3.5" />
          Email
        </a>
      </div>
    </div>
  );
}

export default About;
