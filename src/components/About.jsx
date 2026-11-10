
import { motion } from "motion/react";

function About() {
  return (
    <section
      id="about"
      className="py-24 px-8 md:px-24 bg-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-blue-400 mb-3 font-medium">
            GET TO KNOW ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            About <span className="text-blue-400">Me.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Introduction */}
            <div>
              <h3 className="text-2xl font-semibold mb-5">
                I'm Ashwin Kamble
              </h3>

              <p className="text-gray-400 leading-8 mb-5">
                I'm a Software Engineer and Python Developer
                based in Pune, Maharashtra, India.
              </p>

              <p className="text-gray-400 leading-8 mb-5">
                I hold a Bachelor of Engineering degree in
                Information Technology from Jayawantrao sawant College of Engineering, Savitribai Phule
                Pune University.
              </p>

              <p className="text-gray-400 leading-8 mb-5">
                My interests include Python development,
                software engineering, problem-solving,
                Artificial Intelligence and Machine Learning.
              </p>

              <p className="text-gray-400 leading-8">
                I enjoy learning new technologies and building
                practical solutions that solve real-world problems.
              </p>
            </div>

            {/* Information Cards */}
            <div className="grid grid-cols-2 gap-4">

              <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-700">
                <h3 className="text-3xl font-bold text-blue-400">
                  BE
                </h3>
                <p className="text-gray-400 mt-2">
                  Information Technology
                </p>
              </div>

              <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-700">
                <h3 className="text-3xl font-bold text-blue-400">
                  Python
                </h3>
                <p className="text-gray-400 mt-2">
                  Development Focus
                </p>
              </div>

              <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-700">
                <h3 className="text-3xl font-bold text-blue-400">
                  AI
                </h3>
                <p className="text-gray-400 mt-2">
                  Learning & Exploring
                </p>
              </div>

              <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-700">
                <h3 className="text-3xl font-bold text-blue-400">
                  Pune
                </h3>
                <p className="text-gray-400 mt-2">
                  Maharashtra, India
                </p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
