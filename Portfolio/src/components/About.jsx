import { useInViewAnimation } from "../hooks/useInViewAnimation";

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

      <div className="space-y-5 pb-14 lg:pb-0">
        <p className="text-[#909090] responsive-text-lg leading-relaxed">
          I'm Razvan, a full-stack developer from Dublin, Ireland, with a direct approach to
          turning unique product ideas into reality. My university background gave me the
          foundation, but what really drives me is executing solutions that tackle real-world
          problems head-on.
        </p>

        <p className="text-[#909090] responsive-text-lg leading-relaxed">
          I'm passionate about{' '}
          <span className="text-[#EDEDED] font-medium">React.js</span> and{' '}
          <span className="text-[#EDEDED] font-medium">Next.js</span> for crafting seamless
          user experiences, paired with Python-based frameworks such as{' '}
          <span className="text-[#EDEDED] font-medium">FastAPI</span> for robust, scalable
          systems. My approach: break down complex problems step by step until they're solved.
          No fluff, just results.
        </p>

        <p className="text-[#909090] responsive-text-lg leading-relaxed">
          When I'm not coding, you'll find me diving into music or gaming — both fuel my
          creativity and problem-solving mindset.
        </p>
      </div>
    </div>
  );
}

export default About;
