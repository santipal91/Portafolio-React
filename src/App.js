import "./App.css";
import { NavBar } from "./container/NavBar";
import { Hero } from "./container/Hero";
import About from "./container/About";
import Skills from "./container/Skills";
import Proyects from "./container/Proyects";
import Contact from "./container/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Proyects />
      <Contact />
    </div>
  );
}

export default App;
