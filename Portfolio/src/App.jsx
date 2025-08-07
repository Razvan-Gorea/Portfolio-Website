import "./App.css";
import NavigationBar from "./components/NavigationBar";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <>
      <div id="top" className="min-h-screen bg-slate-900 pt-8">
        <NavigationBar />
        <MainHeader />
      </div>
    </>
  );
}
export default App;
