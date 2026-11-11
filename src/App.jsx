
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, Menu, X, Code2, Mail } from "lucide-react";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Certifications", "#certifications"],
  ["Contact", "#contact"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.body.classList.add("portfolio-body");
    return () => document.body.classList.remove("portfolio-body");
  }, []);

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Ashwin Kamble home">
          <span className="brand-mark">
            A<span>.</span>
          </span>
          <span>Ashwin Kamble</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="mailto:ashwinkamble2866@gmail.com">
          Let's talk <ArrowUpRight size={15} />
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            aria-label="Mobile navigation"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}

            <a
              href="mailto:ashwinkamble2866@gmail.com"
              onClick={() => setMenuOpen(false)}
            >
              Email me
            </a>
          </motion.nav>
        )}
      </AnimatePresence>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">
            A<span>.</span>
          </span>
          <span>Ashwin Kamble</span>
        </a>

        <p>© 2026 Ashwin Kamble. All rights reserved.</p>

        <div className="footer-socials">
          <a
            href="https://github.com/ashwin1730"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code2 size={17} />
          </a>

          <a
            href="https://linkedin.com/in/ashwin-kamble-32b814253"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <span className="linkedin-mark">in</span>
          </a>

          <a
            href="mailto:ashwinkamble2866@gmail.com"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
