import GrowthMindHeader from "../components/growthmind/GrowthMindHeader";
import GrowthMindFooter from "../components/growthmind/GrowthMindFooter";
import GrowthMindHero from "../components/growthmind/GrowthMindHero";

export default function GrowthMind() {
  return (
    <>

<div className="bg-white text-gray-800 min-h-screen font-['Mukta Vaani']">
        <GrowthMindHeader />

        <main className="max-w-[62.5rem] mx-auto px-4 py-16">
          <GrowthMindHero />
            <section className="mt-16 text-center">
              <a
                href="/GrowthMind-CaseStudy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-800 transition"
              >
                View GrowthMind Case Study (PDF)
              </a>
            </section>
        </main>

        <GrowthMindFooter />
      </div>
    </>
  );
}
