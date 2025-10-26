// src/pages/GrowthMind.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GrowthMind() {
  return (
    <div className="bg-[#fdf3dc] text-gray-800 min-h-screen">
      <Header />
      <main className="max-w-[62.5rem] mx-auto px-4 py-16">
        <section className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-4">GrowthMind</h1>
          <p className="text-lg text-gray-600">
            A productivity and habit-tracking app designed to make self-growth feel fun and achievable.
          </p>
        </section>

        {/* Add more sections here later */}
      </main>
      <Footer />
    </div>
  );
}
