import { motion } from "motion/react";
import { ArrowUpRight, Award } from "lucide-react";

const highlights = [
  ["Software Engineering Virtual Experience", "Hewlett Packard Enterprise · Forage"],
  ["Cybersecurity Essentials (LFC108)", "The Linux Foundation"],
  ["Web Development Internship", "Prodigy InfoTech"],
  ["Orchard — Java + Android Training", "LTM · Shoshin School"],
];

function Certifications() {
  return (
    <section className="section-wrap" id="certifications">
      <p className="section-kicker">Continuous learning</p>
      <h2 className="section-title">Certifications <span>&amp; training.</span></h2>
      <p className="section-lead">
        A selection of technical certificates, internship completion records and
        professional training. Open the full collection to view available documents.
      </p>
      <div className="cert-highlight-grid">
        {highlights.map(([title, issuer], index) => (
          <motion.article
            className="glass-card cert-highlight"
            key={title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
          >
            <span className="cert-icon"><Award size={19} /></span>
            <h3>{title}</h3>
            <p>{issuer}</p>
          </motion.article>
        ))}
      </div>
      <a className="button-primary cert-all-link" href="/ashwin-portfolio/certifications/">
        View all certificates <ArrowUpRight size={16} />
      </a>
    </section>
  );
}

export default Certifications;
