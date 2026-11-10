
import { motion } from "motion/react";
import { Mail } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center px-8 md:px-24 py-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 w-full">

        {/* Introduction */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-400 text-lg mb-5"
          >
            Hello, I'm Ashwin Kamble
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Software Engineer
            <span className="text-blue-400">.</span>
          </motion.h1>

          <h2 className="text-2xl text-gray-300 mb-6">
            Python Developer | AI Enthusiast
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            I enjoy building software applications,
            solving complex problems and exploring
            Artificial Intelligence.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#projects" className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition">
              Explore My Work
            </a>

            <a href="#contact" className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 text-gray-400">
            <a href="https://github.com/ashwin1730" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              GitHub
            </a>

            <a href="https://linkedin.com/in/ashwin-kamble-32b814253" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              LinkedIn
            </a>

            <a href="mailto:ashwinkamble2866@gmail.com" className="hover:text-blue-400">
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/profile.jpg`}
            alt="Ashwin Kamble - Software Engineer"
            className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-blue-500 shadow-2xl shadow-blue-500/20"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
