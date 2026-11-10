
import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-8 md:px-24 bg-[#0b1120]"
    >
      <div className="max-w-5xl mx-auto text-center">

        <p className="text-blue-400 font-medium mb-3">
          LET'S CONNECT
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Get In <span className="text-blue-400">Touch.</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto leading-8 mb-12">
          I'm always interested in connecting with
          technology professionals and exploring exciting
          opportunities. Feel free to reach out.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 gap-6"
        >

          <a
            href="mailto:ashwinkamble2866@gmail.com"
            className="bg-[#172033] border border-gray-800 rounded-xl p-7 hover:border-blue-500 transition"
          >
            <Mail size={30} className="text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">Send me an email</p>
          </a>

          <a
            href="https://www.linkedin.com/in/ashwin-kamble-32b814253"
            target="_blank"
            rel="noreferrer"
            className="bg-[#172033] border border-gray-800 rounded-xl p-7 hover:border-blue-500 transition"
          >
            <span className="text-blue-400 text-2xl font-bold block mb-4">in</span>
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm">Connect professionally</p>
          </a>

          <a
            href="https://github.com/ashwin1730"
            target="_blank"
            rel="noreferrer"
            className="bg-[#172033] border border-gray-800 rounded-xl p-7 hover:border-blue-500 transition"
          >
            <span className="text-blue-400 text-2xl font-bold block mb-4">GH</span>
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm">Explore my repositories</p>
          </a>

          <div className="bg-[#172033] border border-gray-800 rounded-xl p-7">
            <MapPin size={30} className="text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-400 text-sm">
              Pune, Maharashtra, India
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
