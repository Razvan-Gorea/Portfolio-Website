import "./App.css";
import NavigationBar from "./components/NavigationBar";
import MainHeader from "./components/MainHeader";
import About from "./components/About";

function App() {
  return (
    <>
      <div id="top" className="min-h-screen bg-slate-900 pt-8">
        <NavigationBar />
        <MainHeader />
        <About />
      </div>
    </>
  );
}
export default App;
