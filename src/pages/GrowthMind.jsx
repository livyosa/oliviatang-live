// GrowthMind code is all in one page. Home uses components.

import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImage from "../assets/images/growthmind-hero.png"; // your two-screen image

export default function GrowthMind() {
  return (
    <div className="bg-[#fdf3dc] text-gray-800 min-h-screen">
      <Header />
      <main className="max-w-[62.5rem] mx-auto px-4 py-16">
        {/* Hero section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
          {/* Left text */}
          <div className="flex-1 text-left">
            <p className="text-gray-600 text-lg mb-2">A moment at a time.</p>
            <h1
              className="text-5xl font-extrabold mb-4"
              style={{ color: "#3A5A15" }}
            >
              GrowthMind
            </h1>
            <p className="text-gray-700 max-w-md">
              A productivity and habit-tracking app designed to make self-growth feel
              fun and achievable.
            </p>
          </div>

          {/* Right image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={heroImage}
              alt="GrowthMind app mockups"
              className="w-full max-w-[24rem] rounded-2xl"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
