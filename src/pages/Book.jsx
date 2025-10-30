import { Link } from "react-router-dom";

function Book({ data, addToCart }) {
  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8 pt-2">
      <h1 lang="km" className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
        ទូសៀវភៅ
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-gray-150 rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="w-full h-60 bg-gray-200 flex items-center justify-center rounded-t-xl overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h2 lang="km" className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  ${item.price}
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => addToCart(item)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm sm:text-base transition-colors w-[48%]"
                >
                  Add to Cart
                </button>
                <Link
                  target="_blank"  
                  rel="noopener noreferrer"
                  to={`${item.lk}`}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-2xl text-sm sm:text-base transition-colors w-[48%] text-center"
                >
                  Read Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;