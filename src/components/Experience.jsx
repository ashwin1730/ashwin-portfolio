
import { motion } from "motion/react";

const experiences = [
  {
    role: "Python Developer",
    company: "LTIMindtree",
    period: "Dec 2025 – Present",
    description:
      "Working on Python-based development and migration activities, contributing to software engineering tasks and technical problem-solving.",
    technologies: ["Python", "SQL", "Migration", "Git"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-8 md:px-24 bg-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-blue-400 font-medium mb-3">
          MY PROFESSIONAL JOURNEY
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Work <span className="text-blue-400">Experience.</span>
        </h2>

        <div className="border-l-2 border-blue-500 pl-8 space-y-10">

          {experiences.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-[#172033] border border-gray-800 rounded-xl p-7"
            >

              <div className="absolute -left-[41px] top-8 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0f172a]" />

              <p className="text-blue-400 text-sm mb-3">
                {item.period}
              </p>

              <h3 className="text-2xl font-bold mb-2">
                {item.role}
              </h3>

              <h4 className="text-gray-300 mb-5">
                {item.company}
              </h4>

              <p className="text-gray-400 leading-8 mb-6">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-[#263449] text-blue-300 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experience;
