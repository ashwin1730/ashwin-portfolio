import { motion } from "motion/react";
const experiences=[{role:"Python Developer",company:"LTIMindtree",period:"Dec 2025 – Present",description:"Working on Python-based development and migration activities, contributing to software engineering tasks and technical problem-solving.",technologies:["Python","SQL","Migration","Git"]}];
function Experience(){
 return <section id="experience" className="section-wrap">
  <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
   <p className="section-kicker">03 / THE JOURNEY</p><h2 className="section-title">Where I&apos;ve <span>been building.</span></h2>
   <div className="timeline">{experiences.map((item,i)=><motion.article className="glass-card timeline-card" key={item.company} initial={{opacity:0,x:-25}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.15}}><span className="eyebrow">{item.period}</span><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.description}</p><div className="tag-row">{item.technologies.map(t=><span className="tag" key={t}>{t}</span>)}</div></motion.article>)}</div>
  </motion.div>
 </section>
}
export default Experience;



