import { motion } from "motion/react";
import { ArrowUpRight, Code2, Mail, MapPin } from "lucide-react";
function Contact(){
 return <section id="contact" className="section-wrap">
  <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
   <p className="section-kicker">06 / HAVE A PROJECT IN MIND?</p><h2 className="section-title">Let&apos;s make something <span>meaningful.</span></h2>
   <div className="glass-card contact-panel">
    <h3>Open to conversations.</h3><p>I&apos;m interested in connecting with technology professionals, exchanging ideas and exploring exciting software engineering opportunities. Feel free to reach out.</p>
    <div className="contact-links">
     <a className="button-primary" href="mailto:ashwinkamble2866@gmail.com"><Mail size={16}/> ash...@gmail.com <ArrowUpRight size={15}/></a>
     <a className="button-secondary" href="https://www.linkedin.com/in/ashwin-arjun-kamble-32b814253/" target="_blank" rel="noreferrer"><span className="linkedin-mark">in</span> LinkedIn <ArrowUpRight size={15}/></a>
     <a className="button-secondary" href="https://github.com/ashwinarjunkamble" target="_blank" rel="noreferrer"><Code2 size={16}/> GitHub <ArrowUpRight size={15}/></a>
    </div>
   </div>
   <p className="section-lead" style={{display:"flex",alignItems:"center",gap:8,marginTop:20,fontSize:11}}><MapPin size={14}/> Pune, Maharashtra, India</p>
  </motion.div>
 </section>
}
export default Contact;



