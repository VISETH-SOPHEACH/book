import { Link } from "react-router-dom";

function Book({ data, addToCart }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-14 pt-8 md:px-8">
      <h1
        lang="km"
        className="mb-7 text-center text-3xl font-bold tracking-wide text-slate-100 light:text-slate-900 md:text-4xl"
      >
        ទូសៀវភៅ
      </h1>
      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="glass-panel group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
          >
            <div className="relative h-64 w-full overflow-hidden bg-slate-900/70 light:bg-slate-100">
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-grow flex-col justify-between p-4">
              <div>
                <h2 lang="km" className="mb-2 line-clamp-2 text-xl font-semibold text-slate-100 light:text-slate-900">
                  {item.title}
                </h2>
                <p className="text-base font-semibold text-cyan-200 light:text-cyan-700">${item.price}</p>
              </div>
              <div className="mt-5 flex gap-2">
                <button
                  onClick={() => addToCart(item)}
                  className="btn-primary w-1/2 px-3 py-2 text-sm"
                >
                  Add
                </button>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={`${item.lk}`}
                  className="btn-secondary w-1/2 px-3 py-2 text-center text-sm"
                >
                  Read
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Book;
