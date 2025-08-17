import { LuLinkedin } from "react-icons/lu";
import { RiGithubLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";

function NavigationBar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-sm bg-white shadow-xl rounded-xl mt-2 sm:mt-4">
        <div className="px-3 sm:px-4 md:px-6">
          <div className="flex justify-center items-center py-3 sm:py-4">
            <div className="flex space-x-4 sm:space-x-5 md:space-x-6">
              <button
                onClick={scrollToTop}
                className="text-black hover:text-slate-400 transition-colors p-2 rounded-lg hover:bg-gray-50"
              >
                <FiHome className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </button>
              <a
                href="https://github.com/Razvan-Gorea"
                className="text-black hover:text-slate-400 transition-colors p-2 rounded-lg hover:bg-gray-50"
              >
                <RiGithubLine className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/razvan-gorea-2a7219296/"
                className="text-black hover:text-slate-400 transition-colors p-2 rounded-lg hover:bg-gray-50"
              >
                <LuLinkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavigationBar;