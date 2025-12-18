export default function Footer() {
  return (
    <footer className="bg-[#f1f1f1] text-gray-600 text-sm font-normal py-5">
      {/* Shared container for perfect header/footer alignment */}
      <div className="max-w-[62.5rem] mx-auto flex justify-between items-center px-6 flex-wrap gap-4">
        {/* Footer Navigation */}
        <nav>
          <ul className="flex list-none gap-6">
            <li>
              <a
                href="#about-section"
                className="text-gray-800 hover:text-gray-500 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects-section"
                className="text-gray-800 hover:text-gray-500 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact-section"
                className="text-gray-800 hover:text-gray-500 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-gray-500 font-medium">© 2025 OLIVIA TANG</p>
      </div>
    </footer>
  );
}
