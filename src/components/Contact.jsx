import emailIcon from "../assets/images/email.svg";
import gitIcon from "../assets/images/git.svg";
import linkedinIcon from "../assets/images/ri_linkedin-box-line.svg";

export default function Contact() {
  return (
    <section
      id="contact-section"
      className="flex flex-col items-center text-center gap-6 py-24 px-4"
    >
      <h2 className="text-2xl font-extrabold tracking-[0.15em] text-gray-800">
        Get in Touch
      </h2>
      <p className="text-xl font-light text-gray-600 max-w-xl">
        Let&apos;s build something together. Email me, or connect via GitHub or LinkedIn.
      </p>

      {/* Buttons */}
      <div className="flex gap-6 justify-center mt-4">
        <a
          href="mailto:oliviatang.ot@gmail.com"
          aria-label="Email"
          className="w-12 h-12 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-700 hover:border-gray-700 transition"
        >
          <img src={emailIcon} alt="Email Icon" className="w-6 h-6" />
        </a>

        <a
          href="https://github.com/livyosa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-12 h-12 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-700 hover:border-gray-700 transition"
        >
          <img src={gitIcon} alt="GitHub Icon" className="w-6 h-6" />
        </a>

        <a
          href="https://linkedin.com/in/oliviatang-ot"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-12 h-12 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-700 hover:border-gray-700 transition"
        >
          <img src={linkedinIcon} alt="LinkedIn Icon" className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
