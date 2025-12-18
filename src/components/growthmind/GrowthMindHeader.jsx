import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const navLinks = ["Projects", "Contact"];
  const location = useLocation();

  const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  // If on homepage, scroll to top. If on other page, go home.
  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[999] bg-[#f8f8f8] shadow-md py-4">
      <div className="max-w-[62.5rem] mx-auto flex justify-between items-center px-6">
        {/* Logo with fade-in */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Link
            to="/"
            onClick={handleLogoClick}
            className="font-bold text-xl text-gray-800 no-underline hover:text-gray-500 transition-colors"
          >
            OT
          </Link>
        </motion.div>

        {/* Animated navigation links */}
        <nav>
          <ul className="flex list-none gap-10">
            {navLinks.map((text, i) => (
              <motion.li
                key={text}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                <a
                  href={
                    text === "Projects"
                      ? "#projects-section"
                      : "#contact-section"
                  }
                  className="text-gray-800 no-underline font-semibold hover:text-gray-400 transition-colors"
                >
                  {text}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
