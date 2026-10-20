import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience-section" className="py-20 bg-white">
      <div className="max-w-[62.5rem] mx-auto px-6">
        <motion.h2 className="font-extrabold text-2xl tracking-[0.15em] mb-8 text-gray-800" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          PROFESSIONAL EXPERIENCE
        </motion.h2>
        <article className="border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <div>
              <h3 className="font-bold text-xl text-gray-800">QA Analyst Intern</h3>
              <p className="text-gray-600 font-medium">FYI.me · Los Angeles, CA</p>
            </div>
            <p className="text-sm text-gray-500">Nov 2023 – Jan 2024</p>
          </div>
          <p className="mt-5 text-gray-600 leading-relaxed">
            Supported mobile product quality through manual testing, documenting functional and interface issues, and collaborating on bug resolution.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {["Manual QA", "Bug Reporting", "Usability", "Mobile Testing"].map((skill) => (
              <span key={skill} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">{skill}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
