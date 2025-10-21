import { motion } from "framer-motion";
import heroImg from "../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 px-4 bg-[#fafafa] overflow-hidden">
      <div className="max-w-[62.5rem] mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-8">
        {/* Text content animates from the left */}
        <motion.div
          className="flex-1 max-w-md"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-extrabold text-5xl tracking-widest text-gray-800 mb-5">
            OLIVIA TANG
          </h1>
          <p className="text-xl text-gray-500 mb-5 leading-relaxed">
            Front-End Developer &amp; UX Designer
          </p>
          <motion.a
            href="#projects-section"
            className="inline-block px-8 py-3 font-semibold text-gray-500 border border-gray-400 rounded-md bg-white hover:bg-gray-600 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>

        {/* Hero image animates from the right */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={heroImg}
            alt="Olivia Tang"
            className="w-full max-w-[25rem] h-auto"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
