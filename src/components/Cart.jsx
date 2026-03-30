import { Link, Outlet, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const navigate = useNavigate();

  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6 md:px-8">
      <h1 className="mb-6 text-center text-4xl font-bold text-slate-100 light:text-slate-900">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="glass-panel mx-auto flex max-w-xl flex-col items-center gap-5 p-10 text-center">
          <p className="text-slate-300 light:text-slate-700">Your cart is empty. Pick a book and come back.</p>
          <Link to="/books" className="btn-secondary gap-2">
            <IoMdArrowBack className="text-lg" />
            Browse Books
          </Link>
        </div>
      ) : (
        <div className="glass-panel overflow-hidden p-4 md:p-6">
          <div className="space-y-3">
            {cart.map((item) => (
              <div
                key={item.cartId}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/6 p-3 light:border-slate-300/80 light:bg-white/90"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-16 w-12 rounded-md border border-white/15 object-cover light:border-slate-300/80"
                  />
                  <div className="min-w-0">
                    <h2 lang="km" className="truncate text-lg font-semibold text-slate-100 light:text-slate-900">
                      {item.title}
                    </h2>
                    <p className="text-sm text-cyan-200 light:text-cyan-700">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.cartId)}
                  className="rounded-full border border-rose-300/40 bg-rose-300/10 px-4 py-1.5 text-sm font-semibold text-rose-200 transition hover:bg-rose-300/20 light:text-rose-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center light:border-slate-300/80">
            <h2 className="text-xl font-semibold text-slate-100 light:text-slate-900">
              Total: <span className="text-cyan-200 light:text-cyan-700">${totalPrice}</span>
            </h2>
            <button onClick={() => navigate("qr")} type="button" className="btn-primary">
              Buy Now
            </button>
          </div>
        </div>
      )}
      <Outlet />
    </section>
  );
}

export default Cart;
