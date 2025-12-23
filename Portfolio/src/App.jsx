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
      <div id="top" className="min-h-screen bg-white pt-8">
        <NavigationBar />
        <MainHeader />
        <div id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-6 sm:px-12 md:px-20 lg:px-32 pt-48 sm:pt-56 md:pt-64 lg:pt-[30vh]">
          <About />
          <div className="flex flex-col gap-8 lg:gap-12">
            <Education />
            <Technologies />
          </div>
        </div>
        <div id="projects">
        <Projects />
        </div>
        <Footer />
        <ScrollToNextButton />
      </div>
    </>
  );
}
export default App;
