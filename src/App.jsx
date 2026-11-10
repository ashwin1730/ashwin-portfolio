
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white">

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 md:px-16 py-6 border-b border-gray-800">

        <h1 className="text-2xl font-bold">
          Ashwin Kamble<span className="text-blue-400">.</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="text-center py-8 text-gray-500 border-t border-gray-800">
        © 2026 Ashwin Kamble. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
