import { motion } from "framer-motion";
import defaultImg from "../assets/images/growthmind.png";
import hoverImg from "../assets/images/growthmind-hover.svg";

export default function Projects() {
  return (
    <section
      id="projects-section"
      className="max-w-[62.5rem] mx-auto pt-32 pb-12 text-left mt-2 px-4 bg-[#fafafa]"
    >
      {/* Title slides in from the LEFT */}
      <motion.h2
        className="font-extrabold text-2xl tracking-[0.15em] mb-8 text-gray-800"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        PROJECTS
      </motion.h2>

      {/* Project card (image slides in from the RIGHT, slightly scaling up) */}
      <motion.div
        className="flex flex-col items-start gap-4 mb-8 w-full"
        initial={{ x: 80, opacity: 0, scale: 0.95 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative w-full overflow-hidden rounded-lg aspect-[16/9]">
          {/* Default image */}
          <img
            src={defaultImg}
            alt="GrowthMind project"
            className="w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0 relative z-10"
          />
          {/* Hover image */}
          <img
            src={hoverImg}
            alt="GrowthMind hover"
            className="w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100 absolute top-0 left-0 z-20"
          />
        </div>
      </motion.div>
    </section>
  );
}
