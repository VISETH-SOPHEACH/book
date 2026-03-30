import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";

function Navbar({ cart, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/books", label: "Books" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl light:border-slate-300/60 light:bg-white/75">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <NavLink to="/" className="flex items-center">
          <h1 lang="en" className="text-2xl font-bold tracking-tight sm:text-3xl">
            <span className="text-slate-50 light:text-slate-900">Book</span>
            <span className="headline-gradient">Shop</span>
          </h1>
        </NavLink>

        <ul className="hidden items-center gap-7 text-sm font-medium text-slate-200 md:flex light:text-slate-700">
          {links.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 transition ${
                    isActive
                      ? "bg-cyan-300/15 text-cyan-200 light:bg-cyan-500/15 light:text-cyan-700"
                      : "hover:bg-white/8 hover:text-cyan-100 light:hover:bg-cyan-600/10 light:hover:text-cyan-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/8 text-slate-100 transition hover:border-cyan-300/50 hover:text-cyan-200 light:border-slate-300 light:bg-slate-100 light:text-slate-700 light:hover:border-cyan-500/40 light:hover:text-cyan-700"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <NavLink to="/cart" className="relative inline-flex">
            <span className="btn-primary">Cart</span>
            {cart.length > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-300 px-1 text-xs font-bold text-slate-900">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/8 text-slate-100 transition hover:border-cyan-300/50 hover:text-cyan-200 light:border-slate-300 light:bg-slate-100 light:text-slate-700 light:hover:border-cyan-500/40 light:hover:text-cyan-700"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/8 light:border-slate-300 light:bg-slate-100"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-5 bg-slate-200 transition light:bg-slate-700 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-slate-200 transition light:bg-slate-700 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-slate-200 transition light:bg-slate-700 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-900/95 transition-all md:hidden light:border-slate-300/60 light:bg-white/95 ${
          menuOpen ? "max-h-96 py-3" : "max-h-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-cyan-300/15 text-cyan-200 light:bg-cyan-500/15 light:text-cyan-700"
                    : "text-slate-200 hover:bg-white/8 light:text-slate-700 light:hover:bg-cyan-600/10"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/cart" onClick={() => setMenuOpen(false)} className="pt-1">
            <span className="btn-primary relative w-full">
              Cart
              {cart.length > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-300 px-1 text-xs font-bold text-slate-900">
                  {cart.length}
                </span>
              )}
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
