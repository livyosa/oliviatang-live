export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
        <a href="#top" className="font-bold text-lg tracking-widest text-gray-800">OT</a>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#projects-section" className="text-gray-700 hover:text-gray-400 font-semibold">Projects</a>
          <a href="#contact-section" className="text-gray-700 hover:text-gray-400 font-semibold">Contact</a>
        </nav>

        <button className="md:hidden text-3xl text-gray-700">
          &#9776;
        </button>
      </div>
    </header>
  );
}
