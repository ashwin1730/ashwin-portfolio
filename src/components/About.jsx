import { motion } from "motion/react";

const facts = [
  ["BE", "Information Technology"],
  ["Python", "Development focus"],
  ["AI / ML", "Learning & exploring"],
  ["Pune", "Maharashtra, India"],
];

function About() {
  return (
    <section id="about" className="section-wrap">
      <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.7}}>
        <p className="section-kicker">01 / A LITTLE ABOUT ME</p>
        <h2 className="section-title">Curious mind.<br/><span>Builder&apos;s mindset.</span></h2>
        <div className="about-grid">
          <div className="about-copy">
            <p>I&apos;m Ashwin Arjun Kamble, a Software Engineer and Python Developer based in Pune, Maharashtra, India.</p>
            <p>I hold a Bachelor of Engineering degree in Information Technology from Jayawantrao Sawant College of Engineering, affiliated with Savitribai Phule Pune University.</p>
            <p>My interests include Python development, software engineering, problem-solving, Artificial Intelligence and Machine Learning.</p>
            <p>I enjoy learning new technologies and building practical solutions that solve real-world problems.</p>
          </div>
          <div className="info-grid">
            {facts.map(([value,label],i)=><motion.div key={label} className="glass-card info-card" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}}><strong>{value}</strong><span>{label}</span></motion.div>)}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
export default About;


