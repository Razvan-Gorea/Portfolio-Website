import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { HiCheckBadge } from "react-icons/hi2";

function Certifications() {
  const { ref, isVisible } = useInViewAnimation(625);

  const certifications = [
    { title: "Claude 101", issuer: "Anthropic" },
    { title: "Claude Code 101", issuer: "Anthropic" },
    { title: "Building with the Claude API", issuer: "Anthropic" },
  ];

  return (
    <div
      ref={ref}
      className={`card flex flex-col transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
      }`}
    >
      <div className="flex items-center gap-3 mb-8">
        <span className="section-num">03</span>
        <div className="h-px flex-1 bg-[#2E2B27]" />
        <span className="section-label">Certifications</span>
      </div>

      <div>
        {certifications.map((item, index) => (
          <div
            key={index}
            className="group flex gap-4 py-4 border-b border-[#2E2B27] last:border-b-0 first:border-t border-[#2E2B27]"
          >
            <div
              className="mt-0.5 p-1.5 border border-[#2E2B27] text-[#9C9285] flex-shrink-0
                         group-hover:border-[#D97A4E] group-hover:text-[#D97A4E] transition-all duration-300"
              style={{ borderRadius: '2px' }}
            >
              <HiCheckBadge className="w-3.5 h-3.5" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-[#F2E9D8] text-body font-semibold leading-snug">
                {item.title}
              </p>
              <p className="text-[#9C9285] mt-0.5" style={{ fontSize: '0.875rem' }}>
                {item.issuer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
