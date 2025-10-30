import { Link } from "react-router-dom";

function About() {
  return (
    <div className=" pt-20  min-h-screen bg-gray-50 p-4 md:p-12">
      <header className="max-w-4xl mx-auto text-center mb-16">
        <div className="text-6xl font-extrabold text-indigo-600 mb-4">
          &hearts;
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Our Story: The Heart of Book Haven
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          More than a bookstore, we're a community built on a shared passion for
          the printed word.
        </p>
      </header>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 lg:p-16">
        <section className="mb-12 border-b pb-8 border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            🏛️ Our Philosophy: The Historical Lens
          </h2>
          <p
            style={{ textIndent: "52px" }}
            className="text-lg text-gray-700 leading-relaxed mb-4"
          >
            The Archive. We're not just a source of information; we're a bridge
            to the past. Founded in 2021 by a team of researchers and
            enthusiasts obsessed with the complex, living narrative of human
            experience, we built The Archive on a simple belief: understanding
            the present requires a deep, honest engagement with history. Forget
            textbook summaries. We meticulously curate every historical source,
            treatise, and biography, ensuring accuracy, context, and diverse
            perspectives on every shelf. From the foundational primary documents
            that shaped nations to the latest groundbreaking analysis of past
            events, we connect you to what happened and what it means now.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-indigo-400 pl-4">
            "History is not the past, but a map of the past, drawn from a
            historian's vantage point, to make sense of the future."
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            ✨ Why Choose Book Haven?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-indigo-50 rounded-lg shadow-md">
              <div className="text-4xl text-indigo-600 mb-3">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800">
                Carefully Curated
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                We select books with intentionality, not just quantity.
              </p>
            </div>

            <div className="p-6 bg-indigo-50 rounded-lg shadow-md">
              <div className="text-4xl text-indigo-600 mb-3">💬</div>
              <h3 className="text-xl font-semibold text-gray-800">
                Reader Focused
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Our support team consists of real book lovers, ready to help.
              </p>
            </div>

            <div className="p-6 bg-indigo-50 rounded-lg shadow-md">
              <div className="text-4xl text-indigo-600 mb-3">🌳</div>
              <h3 className="text-xl font-semibold text-gray-800">
                Eco-Conscious
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Sustainable practices are at the core of our packaging and
                sourcing.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center pt-8 border-t border-gray-100">
          <h2 className="text-3xl font-bold text-indigo-600 mb-3">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Explore our collections, share your favorite reads, and become part
            of the Book Haven family.
          </p>
          <Link to='/books'>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-xl transition duration-300 transform hover:scale-105 uppercase tracking-wider">
            Start Reading Now
          </button>
          </Link>
        </section>
      </div>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        Connect with us on social media! Find the latest news and book talks.
      </footer>
    </div>
  );
}

export default About;