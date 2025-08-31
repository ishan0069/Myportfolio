import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Threads from "./ReactBits/Threads/Threads";

function App() {
  return (
    <>
      {/* Background animation stays fixed and behind */}
      <div className="background-animation">
        <Threads />
      </div>

      {/* Main content goes above */}
      <div className="content">
        <Header />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;