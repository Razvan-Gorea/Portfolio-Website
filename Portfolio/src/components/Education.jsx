import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { HiAcademicCap } from "react-icons/hi2";

function Education() {
  const { ref, isVisible } = useInViewAnimation(500);

  const degrees = [
    {
      degree: "M.Sc. in Computing",
      major: "Artificial Intelligence",
      institution: "Dublin City University",
      period: "2025 — 2026",
    },
    {
      degree: "B.Sc. in Computer Science",
      major: null,
      institution: "Dublin City University",
      period: "2021 — 2025",
    },
  ];

  return (
    <div
      ref={ref}
      className={`flex flex-col transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
      }`}
    >
      <div className="flex items-center gap-3 mb-8">
        <span className="section-num">02</span>
        <div className="h-px flex-1 bg-[#1C1C1C]" />
        <span className="section-label">Education</span>
      </div>

      <div>
        {degrees.map((item, index) => (
          <div
            key={index}
            className="group flex gap-4 py-4 border-b border-[#1C1C1C] last:border-b-0 first:border-t border-[#1C1C1C]"
          >
            <div
              className="mt-0.5 p-1.5 border border-[#1C1C1C] text-[#606060] flex-shrink-0
                         group-hover:border-[#C9FF47] group-hover:text-[#C9FF47] transition-all duration-300"
              style={{ borderRadius: '2px' }}
            >
              <HiAcademicCap className="w-3.5 h-3.5" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <p className="text-[#EDEDED] responsive-text-base font-semibold leading-snug">
                  {item.degree}
                </p>
                <span className="section-label whitespace-nowrap flex-shrink-0 pt-0.5">
                  {item.period}
                </span>
              </div>
              {item.major && (
                <p
                  className="text-[#C9FF47] font-medium mt-1"
                  style={{ fontSize: '0.8125rem', letterSpacing: '0.1em' }}
                >
                  {item.major}
                </p>
              )}
              <p className="text-[#505050] mt-0.5" style={{ fontSize: '0.875rem' }}>
                {item.institution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
