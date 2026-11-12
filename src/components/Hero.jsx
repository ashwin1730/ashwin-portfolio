import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Mail, Code2, Terminal } from "lucide-react";
const roles = ["Python Developer", "Software Engineer", "AI Enthusiast"];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  useEffect(() => {
    const current = roles[roleIndex];
    if (typed.length < current.length) {
      const timer = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 85);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => { setTyped(""); setRoleIndex((roleIndex + 1) % roles.length); }, 1700);
    return () => clearTimeout(timer);
  }, [typed, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <motion.div className="availability" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>
          <span className="status-dot" /> SOFTWARE ENGINEER · PUNE, INDIA
        </motion.div>
        <motion.p className="hero-eyebrow" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .25 }}>
          HELLO, WORLD. I&apos;M
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [.2,.8,.2,1] }}>
          Ashwin<br/><span className="gradient-text">Kamble.</span>
        </motion.h1>
        <motion.div className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }}>
          {typed}<span className="typing-caret" />
        </motion.div>
        <motion.p className="hero-description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8 }}>
          I build practical software solutions, work with Python and modern web technologies, and enjoy exploring how AI can solve real-world problems.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
          <a className="button-primary" href="#projects">Explore my work <ArrowUpRight size={16}/></a>
          <a className="button-secondary" href="#contact">Let&apos;s connect <ArrowDown size={15}/></a>
        </motion.div>
        <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }}>
          <a href="https://github.com/ashwin1730" target="_blank" rel="noreferrer"><Code2 size={16}/> GitHub</a>
          <a href="https://www.linkedin.com/in/ashwin-arjun-kamble-32b814253/" target="_blank" rel="noreferrer"><span className="linkedin-mark">in</span> LinkedIn</a>
          <a href="mailto:ashwinkamble2866@gmail.com"><Mail size={16}/> Email</a>
        </motion.div>
        <motion.div className="stats-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
          <div className="stat"><strong>Python</strong><span>Core focus</span></div>
          <div className="stat"><strong>Full-stack</strong><span>Web technologies</span></div>
          <div className="stat"><strong>AI / ML</strong><span>Exploring</span></div>
        </motion.div>
      </div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .3 }}>
        <div className="orbit"><span className="orbit-node"/></div>
        <div className="photo-halo"/>
        <motion.div className="profile-frame" whileHover={{ scale: 1.035, rotate: 2 }}>
          <img src={`${import.meta.env.BASE_URL}images/profile.jpg`} alt="Ashwin Arjun Kamble, Software Engineer and Python Developer" fetchPriority="high"/>
        </motion.div>
        <motion.div className="floating-chip chip-one" animate={{ y: [0,-9,0] }} transition={{ duration: 4, repeat: Infinity }}> <Code2 size={14} style={{display:"inline",verticalAlign:"middle",marginRight:7}}/> PYTHON.DEV</motion.div>
        <motion.div className="floating-chip chip-two" animate={{ y: [0,9,0] }} transition={{ duration: 5, repeat: Infinity }}><Terminal size={14} style={{display:"inline",verticalAlign:"middle",marginRight:7}}/> BUILD · LEARN · SHIP</motion.div>
      </motion.div>
    </section>
  );
}
export default Hero;



