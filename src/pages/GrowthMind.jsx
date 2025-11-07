import Header from "../components/Header";
import Footer from "../components/Footer";
import GrowthMindHero from "../components/GrowthMindHero";

export default function GrowthMind() {
  return (
    <div className="bg-[#fdf3dc] text-gray-800 min-h-screen">
      <Header />
      <main className="max-w-[62.5rem] mx-auto px-4 py-16">
        <GrowthMindHero />
      </main>
      <Footer />
    </div>
  );
}
