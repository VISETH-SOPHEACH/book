import { Link } from "react-router-dom";

function About() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-6 md:px-8">
      <header className="glass-panel mb-8 p-8 text-center md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200 light:text-cyan-700">About BookPulse</p>
        <h1 className="mt-3 text-4xl font-extrabold text-slate-50 light:text-slate-900 md:text-5xl">Our Story</h1>
        <p className="mx-auto mt-4 max-w-3xl text-slate-300 light:text-slate-700">
          More than a bookstore, we are a reading community built around curiosity, culture, and thoughtful learning.
        </p>
      </header>

      <div className="glass-panel p-7 md:p-10">
        <section className="border-b border-white/10 pb-8 light:border-slate-300/70">
          <h2 className="text-3xl font-bold text-slate-100 light:text-slate-900">Our Philosophy</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300 light:text-slate-700">
            We curate titles with care and context, not noise. Our collection focuses on history, critical thinking,
            and stories that shape perspective. Every recommendation is selected to help readers connect ideas from the
            past to the world we are building now.
          </p>
          <p className="mt-4 rounded-xl border-l-4 border-cyan-300/70 bg-white/5 p-4 text-slate-200 light:bg-cyan-50 light:text-slate-700">
            "Reading deeply is one of the most practical ways to think independently."
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-5 text-3xl font-bold text-slate-100 light:text-slate-900">Why Readers Choose Us</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-white/10 bg-white/5 p-5 light:border-slate-300/70 light:bg-white/85">
              <h3 className="text-xl font-semibold text-cyan-100 light:text-cyan-700">Curated Shelves</h3>
              <p className="mt-2 text-sm text-slate-300 light:text-slate-700">Every title is selected with purpose and quality in mind.</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-white/5 p-5 light:border-slate-300/70 light:bg-white/85">
              <h3 className="text-xl font-semibold text-cyan-100 light:text-cyan-700">Human Support</h3>
              <p className="mt-2 text-sm text-slate-300 light:text-slate-700">Real readers help you discover books you will actually finish.</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-white/5 p-5 light:border-slate-300/70 light:bg-white/85">
              <h3 className="text-xl font-semibold text-cyan-100 light:text-cyan-700">Sustainable Thinking</h3>
              <p className="mt-2 text-sm text-slate-300 light:text-slate-700">We prioritize responsible sourcing and mindful packaging.</p>
            </article>
          </div>
        </section>

        <section className="mt-10 border-t border-white/10 pt-8 text-center light:border-slate-300/70">
          <h2 className="text-3xl font-bold text-slate-100 light:text-slate-900">Join Our Community</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300 light:text-slate-700">
            Explore our collection, discover bold ideas, and build a reading habit that lasts.
          </p>
          <Link to="/books" className="mt-6 inline-flex">
            <span className="btn-primary">Start Reading</span>
          </Link>
        </section>
      </div>
    </section>
  );
}

export default About;
