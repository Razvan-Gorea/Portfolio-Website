import "./App.css";
import NavigationBar from "./components/NavigationBar";
import MainHeader from "./components/MainHeader";
import About from "./components/About";
import Education from "./components/Education";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToNextButton from "./components/ScrollToNextButton";

function App() {
  return (
    <>
      <div id="top" className="min-h-screen mesh-bg pt-8 relative">
        {/* Background decorative elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-indigo-200/40 to-purple-300/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-32 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-rose-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-200/30 to-blue-300/20 rounded-full blur-3xl" />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <NavigationBar />
          <MainHeader />

          <div id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-6 sm:px-12 md:px-20 lg:px-32 pt-48 sm:pt-56 md:pt-64 lg:pt-[30vh]">
            <About />
            <div className="flex flex-col gap-8 lg:gap-12">
              <Education />
              <Technologies />
            </div>
          </div>

          {/* Section divider */}
          <div className="section-divider mx-6 sm:mx-12 md:mx-20 lg:mx-32" />

          <div id="projects">
            <Projects />
          </div>

          <Footer />
        </div>

        <ScrollToNextButton />
      </div>
    </>
  );
}
export default App;
