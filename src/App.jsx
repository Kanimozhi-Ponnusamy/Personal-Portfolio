import "./index.css";
import Navbar from "./nav.jsx";
import Herosection from "./Herosection.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Internship from "./Internship.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";

function App() {
  return (
    <div className="min-h-screen overflow-hidden relative animated-gradient">
      {/* Blurry Glowing Blobs */}
      <div className="absolute -top-20 -left-16 w-80 h-80 bg-pink-400 rounded-full opacity-30 blur-3xl animate-pulse z-0"></div>
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-500 rounded-full opacity-25 blur-3xl animate-ping z-0"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400 rounded-full opacity-20 blur-2xl animate-pulse z-0"></div>
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Herosection />
        <Skills />
        <Projects />
        <Internship />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
