import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { HiAcademicCap } from "react-icons/hi2";

function Education() {
  const { ref, isVisible } = useInViewAnimation(1000);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-start lg:items-start transition-all duration-2000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
    >
      <p className="gradient-text responsive-text-3xl text-left mb-6 font-bold">My Education</p>

      <div className="space-y-4">
        <div className="flex items-start gap-3 group">
          <div className="mt-1 p-2 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-600 group-hover:from-indigo-200 group-hover:to-purple-200 transition-colors">
            <HiAcademicCap className="w-5 h-5" />
          </div>
          <div>
            <p className="text-gray-800 responsive-text-lg font-medium">
              M.Sc. in Computing
            </p>
            <p className="text-indigo-600 text-sm font-medium">Major: Artificial Intelligence</p>
            <p className="text-gray-500 text-sm">Dublin City University • 2025 - 2026</p>
          </div>
        </div>

        <div className="flex items-start gap-3 group">
          <div className="mt-1 p-2 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-600 group-hover:from-indigo-200 group-hover:to-purple-200 transition-colors">
            <HiAcademicCap className="w-5 h-5" />
          </div>
          <div>
            <p className="text-gray-800 responsive-text-lg font-medium">
              B.Sc. in Computer Science
            </p>
            <p className="text-gray-500 text-sm">Dublin City University • 2021 - 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
