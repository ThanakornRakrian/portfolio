import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import MengBlog1 from "./components/MengBlog1";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-[#E0CCBE] min-h-screen ">
      <Navbar />
      <div className="flex flex-col items-center">
        <MengBlog1 />
        <Project />
        <Skills />
        <Experience />
        <Education />
        <Footer />
      </div>
    </div>
  );
}

export default App;
