import GrowthMindHeader from "../components/growthmind/GrowthMindHeader";
import GrowthMindFooter from "../components/growthmind/GrowthMindFooter";
import GrowthMindHero from "../components/growthmind/GrowthMindHero";


export default function GrowthMind() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      <main className="max-w-[62.5rem] mx-auto px-4 py-16">
        <GrowthMindHero />
      </main>
      <Footer />
    </div>
  );
}
