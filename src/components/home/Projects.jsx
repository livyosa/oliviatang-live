import { motion } from "framer-motion";
import growthmind from "../../assets/images/growthmind-default.png";
import growthmindHover from "../../assets/images/growthmind-hover.png";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
<section
  id="projects-section"
  className="max-w-[62.5rem] mx-auto pt-32 pb-12 text-left mt-2 px-4 bg-[#fafafa]"
>
  {/* Growthmind Project begins below this line */}
  <motion.h2
    className="font-extrabold text-2xl tracking-[0.15em] mb-8 text-gray-800"
    initial={{ x: -80, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    PROJECTS
  </motion.h2>

  <div className="flex flex-col gap-16">
    <a
  href="/growthmind-case-study.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full"
>
      <motion.div
        className="flex flex-col items-start gap-4 w-full cursor-pointer"
        initial={{ x: 80, opacity: 0, scale: 0.95 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative w-full overflow-hidden rounded-lg">
          <img
            src={growthmind}
            alt="GrowthMind project"
            className="w-full h-auto transition-opacity duration-300 opacity-100 hover:opacity-0"
          />

          <img
            src={growthmindHover}
            alt="GrowthMind hover"
            className="w-full h-auto transition-opacity duration-300 opacity-0 hover:opacity-100 absolute top-0 left-0"
          />
        </div>

        <h3 className="text-lg font-semibold text-gray-800 tracking-wide mt-2">
          GrowthMind
        </h3>
        <p className="text-gray-600 text-sm">
          A habit-tracking and productivity project for building positive daily routines.
        </p>
      </motion.div>
    </a>
  </div>
  {/* Growthmind Project ends aboc this line */}
</section>
  );
}
