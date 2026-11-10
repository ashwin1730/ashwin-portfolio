
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
const projects = [
  {
    title: "E-Commerce Negotiation Chatbot",
    description:
      "An intelligent chatbot designed to support product price negotiation in an e-commerce application.",
    technologies: ["Python", "JavaScript", "MongoDB", "AI"],
    github: "",
    demo: "",
  },
  {
    title: "EV Charging Station Finder",
    description:
      "An application to find EV charging stations and manage charging slot bookings.",
    technologies: ["React", "Node.js", "MongoDB", "Maps API"],
    github: "",
    demo: "",
  },
  {
    title: "Hotel Management System",
    description:
      "A hotel management application supporting room booking, CRUD operations and database management.",
    technologies: ["Python", "SQL", "Database Design"],
    github: "",
    demo: "",
  },
  {
    title: "Fruit Disease Detection",
    description:
      "A deep learning project designed to identify fruit diseases through image classification.",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    github: "",
    demo: "",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-8 md:px-24 bg-[#0b1120]"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-blue-400 font-medium mb-3">
          MY RECENT WORK
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Featured <span className="text-blue-400">Projects.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-7">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#172033] border border-gray-800 rounded-xl p-7 hover:border-blue-500 transition"
            >

              <h3 className="text-xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-7">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#263449] text-blue-300 px-3 py-2 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-5 text-gray-400">
                {project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub repository"
    className="hover:text-blue-400 text-sm"
  >
    GitHub Repository
  </a>
)}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live project demo"
                    className="hover:text-blue-400"
                  >
                    <ExternalLink size={21} />
                  </a>
                )}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;
