import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar({ cart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-600/40 backdrop-blur-md border-b border-white/10 shadow-lg pb-0">
      <div className="flex justify-between items-center py-4 px-6 md:px-10">
        <NavLink to="/" className="flex items-center">
          <h1
            lang="en"
            className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg hover:scale-105 transition-transform"
          >
            Book<span className="text-yellow-300">Shop</span>
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-semibold">
          {["/", "/books", "/about", "/contact"].map((path, i) => {
            const names = ["Home", "Books", "About", "Contact"];
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative inline-block hover:text-green-300 transition-all hover:scale-110 ${
                      isActive
                        ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-blue-300"
                        : ""
                    }`
                  }
                >
                  {names[i]}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Desktop Cart Button */}
        <div className="hidden md:block relative">
          <NavLink to="/cart">
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-bold hover:bg-green-500 hover:text-white transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Cart
            </button>

            {/* Cart Count Badge */}
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-1 bg-white rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 bg-white rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 bg-white rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-300/40 backdrop-blur-md border-b border-white/10 shadow-lg text-center overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        {["/", "/books", "/about", "/contact"].map((path, i) => {
          const names = ["Home", "Books", "About", "Contact"];
          return (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-lg hover:text-yellow-300 ${
                  isActive ? "underline decoration-yellow-300" : ""
                }`
              }
            >
              {names[i]}
            </NavLink>
          );
        })}

        {/* Mobile Cart Button */}
        <NavLink to="/cart" onClick={() => setMenuOpen(false)}>
          <div className="relative inline-block">
            <button
              className="bg-white text-indigo-600 px-6 py-2 rounded-full font-bold 
      hover:bg-green-500 hover:text-white transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Cart
            </button>

            {/* Show badge only if cart has items */}
            {cart.length > 0 && (
              <span
                className="absolute -top-2 -right-2 bg-red-600 text-white text-xs 
        w-5 h-5 flex items-center justify-center rounded-full"
              >
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
