import heroImage from "../assets/images/growthmind-hero.png";

export default function GrowthMindHero() {
  return (
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
  );
}
