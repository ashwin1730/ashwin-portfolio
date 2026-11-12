import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
function Education(){
 return <section id="education" className="section-wrap">
  <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
   <p className="section-kicker">05 / THE FOUNDATION</p><h2 className="section-title">Education & <span>learning.</span></h2>
   <motion.div className="glass-card education-card" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}}>
    <div className="education-icon"><GraduationCap size={27}/></div><div><h3>Bachelor of Engineering</h3><h4>Information Technology</h4><p>Jayawantrao Sawant College of Engineering</p><p>Savitribai Phule Pune University · Maharashtra, India</p><span className="tag">CGPA: 8.14 / 10</span></div>
   </motion.div>
  </motion.div>
 </section>
}
export default Education;



