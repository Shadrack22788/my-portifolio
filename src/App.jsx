
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <About />
       <Skills />
       <Experience />
      <Projects />
      <Services />
      <Contact />
      <Footer/>
     
    </div>
  );
}

export default App;