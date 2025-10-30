import { Link } from "react-router-dom";

function Home() {
  const coreBenefits = [
    {
      id: 1,
      title: "Boosts Brain Power",
      icon: "🧠",
      description:
        "Reading is a mental workout that enhances cognitive function, memory, and concentration.",
    },
    {
      id: 2,
      title: "Reduces Stress",
      icon: "🧘",
      description:
        "Escaping into a good book can lower heart rate and ease muscle tension more effectively than other activities.",
    },
    {
      id: 3,
      title: "Expands Vocabulary",
      icon: "🗣️",
      description:
        "Exposure to new words in context naturally improves your speaking and writing skills.",
    },
    {
      id: 4,
      title: "Increases Empathy",
      icon: "❤️",
      description:
        "By stepping into a character's shoes, you gain a deeper understanding of human emotions and perspectives.",
    },
  ];
  const advantages = {
    textIndent: "52px",
  };
  const BenefitCard = ({ title, icon, description }) => (
    <div className=" freehand-regular bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 p-6 border-t-4 border-indigo-400 flex flex-col items-start text-left">
      <div className="text-4xl text-indigo-500 mb-3">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  return (
    <div className="pt-20 min-h-screen bg-gray-300 p-4 md:p-8 lg:p-12">
      <div className="relative mb-16 bg-gray-100 shadow-2xl rounded-2xl p-8 md:p-16 border-t-8 border-indigo-600">
        <div className="text-center text-5xl text-indigo-500 mx-auto mb-4">
          🌟
        </div>{" "}
        <h1 className=" text-center text-5xl font-extrabold text-gray-900 leading-tight">
          Unlock Your Potential: The{" "}
          <span className="text-indigo-600">Power of Reading</span>
        </h1>
        <p
          style={advantages}
          className=" mx-auto text-xl text-gray-700 mt-4 leading-relaxed text-justify "
        >
          Reading offers a wealth of advantages that significantly impact
          personal and intellectual growth. By regularly engaging with books,
          articles, and other texts, individuals can expand their vocabulary and
          improve their writing skills, as exposure to diverse linguistic styles
          strengthens communication abilities. Furthermore, reading is a
          powerful tool for cognitive development; it enhances concentration,
          critical thinking, and analytical skills as the brain processes
          complex narratives and information. Beyond academics and career
          benefits, reading provides a unique form of relaxation and stress
          reduction, allowing an escape into different worlds and perspectives,
          thereby fostering empathy and a deeper understanding of human
          experience.
        </p>
        <Link to='/books'>
          <button className="block  mx-auto mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 text-lg uppercase tracking-wider">
            Start Your Reading Journey
          </button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-gray-200 pb-2 text-center">
          🔬 Science-Backed Advantages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreBenefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              title={benefit.title}
              icon={benefit.icon}
              description={benefit.description}
            />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center bg-indigo-500 rounded-2xl p-10 shadow-2xl bg-opacity-95">
        <div className="text-4xl text-white mx-auto mb-4">✨</div>
        <h2 className="text-3xl font-bold text-white">
          Make a Positive Change Today
        </h2>
        <p className="text-indigo-100 mt-3 mb-6">
          Commit to just 20 minutes of reading a day to experience meaningful
          improvements in focus, vocabulary, and mental calm.
        </p>
        <Link to="/books">
          <button
            type="button"
            className="bg-white text-indigo-600 hover:text-indigo-800 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 uppercase"
          >
            Find Your First Book
          </button>
        </Link>
      </div>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Literacy Advocate. Invest in your
        mind. <button className="bg-yellow-600 text-white">( don't buy anything, it's just a test site !!! )</button>
      </footer>
    </div>
  );
}

export default Home;