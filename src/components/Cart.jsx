import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="flex items-center justify-center text-gray-600 gap-3">
          Your cart is empty.
          <Link to="/books">
            <button
              type="button"
              className="flex items-center gap-2 bg-green-200 hover:bg-green-300 text-gray-800 font-semibold py-2 px-6 rounded-3xl transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
            >
              <IoMdArrowBack className="text-xl" />
              Back
            </button>
          </Link>
        </p>
      ) : (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.cartId)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl font-semibold">
              Total: <span className="text-blue-600">${totalPrice}</span>
            </h2>
            <button
              onClick={() => navigate("Qr")}
              type="button"
              className="flex items-center gap-2 bg-green-200 hover:bg-green-300 text-gray-800 font-semibold py-2 px-6 rounded-3xl transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
            >
              Buy now
            </button>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Cart;