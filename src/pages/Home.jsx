import { Link } from "react-router-dom";

function Home() {
  const coreBenefits = [
    {
      id: 1,
      title: "Boosts Brain Power",
      icon: "",
      description:
        "Reading is a mental workout that enhances cognitive function, memory, and concentration.",
    },
    {
      id: 2,
      title: "Reduces Stress",
      icon: "",
      description:
        "Escaping into a good book can lower heart rate and ease muscle tension more effectively than other activities.",
    },
    {
      id: 3,
      title: "Expands Vocabulary",
      icon: "",
      description:
        "Exposure to new words in context naturally improves your speaking and writing skills.",
    },
    {
      id: 4,
      title: "Increases Empathy",
      icon: "",
      description:
        "By stepping into a character's shoes, you gain a deeper understanding of human emotions and perspectives.",
    },
  ];

  const BenefitCard = ({ title, description }) => (
    <div className="glass-panel h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
      <h3 className="text-lg font-semibold text-cyan-100 light:text-cyan-800">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300 light:text-slate-700">
        {description}
      </p>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-4 md:px-8">
      <section className="glass-panel relative overflow-hidden p-8 md:p-12">
        <div className="pointer-events-none absolute -left-16 top-0 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-14 bottom-0 h-44 w-44 rounded-full bg-amber-300/20 blur-3xl" />
        <h1 className="relative text-center text-4xl font-extrabold leading-tight md:text-6xl">
          Unlock Your Potential with the{" "}
          <span className="headline-gradient">Power of Reading</span>
        </h1>
        <p className="relative mx-auto mt-6 max-w-4xl text-justify text-base leading-relaxed text-slate-300 light:text-slate-700 md:text-lg">
          Reading boosts vocabulary, writing, and thinking skills while
          improving focus and analysis. It also helps reduce stress and builds
          empathy by exposing readers to different perspectives.
        </p>
        <Link to="/books" className="relative mx-auto mt-8 block w-fit">
          <button className="btn-primary px-7 py-3 text-sm uppercase tracking-wide">
            Start Your Reading Journey
          </button>
        </Link>
      </section>

      <section className="mx-auto mb-12 mt-10 max-w-7xl">
        <h2 className="mb-6 text-center text-3xl font-bold text-slate-100 light:text-slate-900 md:text-4xl">
          Science-Backed Advantages
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {coreBenefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </section>

      <section className="glass-panel mx-auto max-w-5xl p-8 text-center md:p-10">
        <h2 className="text-3xl font-bold text-slate-50 light:text-slate-900">
          Make a Positive Change Today
        </h2>
        <p className="mb-6 mt-3 text-slate-300 light:text-slate-700">
          Commit to just 20 minutes of reading a day to experience meaningful
          improvements in focus, vocabulary, and mental calm.
        </p>
        <Link to="/books">
          <button type="button" className="btn-secondary uppercase">
            Find Your First Book
          </button>
        </Link>
      </section>

      <footer className="mt-10 text-center text-sm text-slate-400 light:text-slate-600">
        &copy; {new Date().getFullYear()} Literacy Advocate. Invest in your
        mind.
        <span className="ml-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-amber-200">
          Demo site only
        </span>
      </footer>
    </div>
  );
}

export default Home;
