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
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="4"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain-filter)" />
        </svg>
      </div>

      {/* Ambient terracotta glow — top-left corner, always visible */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 55% 35% at 0% 0%, rgba(193, 96, 60, 0.07) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div id="top" className="relative z-10">
        <NavigationBar />
        <MainHeader />

        {/* About / Education / Skills */}
        <div
          id="about"
          className="grid grid-cols-1 lg:grid-cols-2 px-6 sm:px-12 md:px-20 lg:px-32"
        >
          <div className="lg:border-r border-[#DCD4C0] lg:pr-14">
            <About />
          </div>
          <div className="lg:pl-14 flex flex-col gap-14 mt-14 lg:mt-0">
            <Education />
            <Technologies />
          </div>
        </div>

        {/* Section divider */}
        <div className="sep mx-6 sm:mx-12 md:mx-20 lg:mx-32 my-20 sm:my-24" />

        <div id="projects">
          <Projects />
        </div>

        <Footer />
      </div>

      <ScrollToNextButton />
    </>
  );
}

export default App;
