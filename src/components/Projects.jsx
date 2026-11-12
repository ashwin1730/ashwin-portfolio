import { motion } from "motion/react";
import { ArrowUpRight, Bot, CarFront, Hotel, ScanSearch } from "lucide-react";
const projects=[
 {title:"E-Commerce Negotiation Chatbot",description:"An AI-powered e-commerce negotiation chatbot concept for interactive product price discussions, combining Python, JavaScript and MongoDB.",technologies:["Python","JavaScript","MongoDB","AI"],icon:Bot},
 {title:"EV Charging Station Finder",description:"An application concept that helps users locate electric vehicle charging stations and manage charging slot bookings using mapping technology.",technologies:["React","Node.js","MongoDB","Maps API"],icon:CarFront},
 {title:"Hotel Management System",description:"A hotel management application with room booking functionality, CRUD operations and structured database management using SQL.",technologies:["Python","SQL","Database Design"],icon:Hotel},
 {title:"Fruit Disease Detection",description:"A deep learning project designed to identify fruit diseases through image classification using Python, TensorFlow and OpenCV.",technologies:["Python","TensorFlow","OpenCV"],icon:ScanSearch},
];
function Projects(){
 return <section id="projects" className="section-wrap">
  <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
   <p className="section-kicker">04 / SELECTED WORK</p><h2 className="section-title">Things I&apos;ve <span>worked on.</span></h2>
   <p className="section-lead">A selection of academic and personal projects exploring software, data and applied AI.</p>
   <div className="project-grid">{projects.map((project,i)=>{const Icon=project.icon;return <motion.article className="glass-card project-card" key={project.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.1,duration:.55}} whileHover={{y:-7}}>
    <div className="project-top"><span className="project-index">PROJECT / {String(i+1).padStart(2,"0")}</span><span className="project-icon"><Icon size={19}/></span></div>
    <h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.technologies.map(t=><span className="tag" key={t}>{t}</span>)}</div>
   </motion.article>})}</div>
  </motion.div>
 </section>
}
export default Projects;



