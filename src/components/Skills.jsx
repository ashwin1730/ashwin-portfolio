
import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    title: "Database & Tools",
    skills: ["MySQL", "MongoDB", "Git", "GitHub", "VS Code"],
  },
  {
    title: "Core Interests",
    skills: ["Data Structures", "AI", "Machine Learning", "Problem Solving"],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-8 md:px-24 bg-[#0b1120]">
      <div className="max-w-6xl mx-auto">

        <p className="text-blue-400 font-medium mb-3">
          WHAT I WORK WITH
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Technical <span className="text-blue-400">Skills.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#172033] border border-gray-800 rounded-xl p-7"
            >
              <h3 className="text-xl font-semibold mb-6">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#263449] text-gray-300 rounded-lg text-sm hover:bg-blue-600 hover:text-white transition"
                  >
                    {skill}
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

export default Skills;
