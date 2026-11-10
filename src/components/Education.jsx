
import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

function Education() {
  return (
    <section
      id="education"
      className="py-24 px-8 md:px-24 bg-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-blue-400 font-medium mb-3">
          MY ACADEMIC BACKGROUND
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Education<span className="text-blue-400">.</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#172033] border border-gray-800 rounded-xl p-8 max-w-3xl"
        >

          <div className="flex items-start gap-5">

            <div className="bg-blue-500/10 p-4 rounded-xl">
              <GraduationCap
                size={35}
                className="text-blue-400"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">
                Bachelor of Engineering
              </h3>

              <h4 className="text-blue-400 mb-3">
                Information Technology
              </h4>

              <p className="text-gray-300 mb-3">
                Savitribai Phule Pune University
              </p>

              <p className="text-gray-400 text-sm">
                Maharashtra, India
              </p>

              <div className="mt-5">
                <span className="bg-[#263449] text-blue-300 px-4 py-2 rounded-lg text-sm">
                  CGPA: 8.14 / 10
                </span>
              </div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Education;
