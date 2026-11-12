import { motion } from "motion/react";
const skillGroups = [
  { title:"Programming languages", skills:["Python","JavaScript","SQL","HTML","CSS"] },
  { title:"Frameworks & libraries", skills:["React.js","Node.js","Express.js","Tailwind CSS"] },
  { title:"Databases & tools", skills:["MySQL","MongoDB","Git","GitHub","VS Code"] },
  { title:"Core interests", skills:["Data Structures","AI","Machine Learning","Problem Solving"] },
];
function Skills(){
 return <section id="skills" className="section-wrap">
  <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
   <p className="section-kicker">02 / MY TOOLKIT</p><h2 className="section-title">Technologies I <span>work with.</span></h2>
   <p className="section-lead">A growing toolkit for building reliable applications and exploring intelligent solutions.</p>
   <div className="skill-grid">{skillGroups.map((group,i)=><motion.div key={group.title} className="glass-card skill-card" initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.12,duration:.55}} whileHover={{y:-7}}>
    <h3>{String(i+1).padStart(2,"0")} — {group.title}</h3><div className="skill-list">{group.skills.map(skill=><span className="skill-pill" key={skill}>{skill}</span>)}</div>
   </motion.div>)}</div>
  </motion.div>
 </section>
}
export default Skills;



