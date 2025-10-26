import { motion } from "framer-motion";
import defaultImg from "../assets/images/growthmind.png";
import hoverImg from "../assets/images/growthmind-hover.svg";
import { Link } from "react-router-dom";

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

      {/* GrowthMind Project Card */}
      <Link to="/growthmind" className="w-full">
        <motion.div
          className="flex flex-col items-start gap-4 mb-8 w-full cursor-pointer"
          initial={{ x: 80, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
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

          {/* Title under the image */}
          <h3 className="text-lg font-semibold text-gray-800 tracking-wide mt-2">
            GrowthMind
          </h3>
          <p className="text-gray-600 text-sm">
            A habit-tracking and productivity project for building positive daily routines.
          </p>
        </motion.div>
      </Link>
    </section>
  );
}
