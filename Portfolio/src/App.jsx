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
      <div id="top" className="min-h-screen bg-slate-200 pt-8">
        <NavigationBar />
        <MainHeader />
        <div id="about">
          <About />
        </div>
        <Education />
        <Technologies />
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
