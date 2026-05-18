import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects-section"
      className="pt-32 pb-12 mt-2 bg-[#fafafa]"
    >
      <div className="max-w-[62.5rem] mx-auto px-6 text-left">
        <motion.h2
          className="font-extrabold text-2xl tracking-[0.15em] mb-8 text-gray-800"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          PROJECTS
        </motion.h2>

        <motion.p
          className="text-gray-400 text-sm tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Case studies coming soon.
        </motion.p>
      </div>
    </section>
  );
}