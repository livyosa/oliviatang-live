import ProjectHeader from "../components/layout/ProjectHeader";
import GrowthMindHeader from "../components/home/Header";
import GrowthMindFooter from "../components/growthmind/GrowthMindFooter";
import GrowthMindHero from "../components/growthmind/GrowthMindHero";

export default function GrowthMind() {
  return (
    <>
      <ProjectHeader />

      <div className="bg-white text-gray-800 min-h-screen">
        <GrowthMindHeader />

        <main className="max-w-[62.5rem] mx-auto px-4 py-16">
          <GrowthMindHero />
        </main>

        <GrowthMindFooter />
      </div>
    </>
  );
}
