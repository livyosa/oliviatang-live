// behavior of the header: it drops down when the page load. 


import { useState } from "react";
import { Link } from "react-router-dom";

export default function GrowthMindHeader() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {!visible && (
        <button
          onClick={() => setVisible(true)}
          className="fixed top-4 left-6 z-40 font-bold text-xl text-neutral-900 opacity-20 hover:opacity-40 transition-all duration-200 cursor-pointer"
          aria-label="Open navigation"
        >
          OT
        </button>
      )}

      <div
        className="fixed top-0 left-0 w-full h-8 z-40"
        onMouseEnter={() => setVisible(true)}
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white text-neutral-900 shadow-sm transition-transform duration-300 ease-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
        onMouseLeave={() => setVisible(false)}
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="font-bold text-xl"
            onClick={() => setVisible(false)}
          >
            OT
          </Link>

          <Link to="/" className="text-sm font-medium hover:underline">
            Back to Portfolio →
          </Link>
        </div>
      </header>
    </>
  );
}
