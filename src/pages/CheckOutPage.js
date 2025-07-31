import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

function CheckOutPage() {
  const { cart = [] } = useCart();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useDarkMode();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cart.length) {
      alert("Your cart is empty!");
      return;
    }

    navigate("/order-summary", {
      state: {
        customer: formData,
        cart,
      },
    });
  };

  const bgColor = darkMode ? "bg-black" : "bg-white";
  const cardBg = darkMode ? "bg-gray-900" : "bg-gray-200";
  const textColor = darkMode ? "text-white" : "text-black";
  const inputBg = darkMode
    ? "bg-gray-800 text-white border-gray-700"
    : "bg-white text-black border-gray-300";
  const buttonClasses = darkMode
    ? "bg-yellow-400 text-black hover:bg-yellow-300"
    : "bg-blue-600 text-white hover:bg-blue-700";

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={`${bgColor} ${textColor} min-h-screen`}>
      <div className="container mx-auto p-6">
        {/* Header & Dark Mode Toggle */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Checkout</h2>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded ${buttonClasses}`}
          >
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <div className={`max-w-3xl mx-auto ${cardBg} shadow-lg rounded-lg p-8`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your name"
              className={`w-full p-3 rounded-lg border ${inputBg}`}
              required
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              className={`w-full p-3 rounded-lg border ${inputBg}`}
              required
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Enter your phone number"
              className={`w-full p-3 rounded-lg border ${inputBg}`}
              required
            />

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your shipping address"
              rows="3"
              className={`w-full p-3 rounded-lg border resize-none ${inputBg}`}
              required
            ></textarea>

            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border ${inputBg}`}
              required
            >
              <option value="">Select payment option</option>
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
              <option value="cod">Cash on Delivery</option>
            </select>

            {/* Cart Summary */}
            <div className="pt-6 border-t mt-6">
              <h3 className="text-xl font-semibold mb-4">🧾 Cart Summary</h3>
              {cart.length === 0 ? (
                <p className="text-sm text-red-400">No items in your cart.</p>
              ) : (
                <ul className="space-y-2">
                  {cart.map((item) => (
                    <li key={item.id} className="flex justify-between">
                      <span>
                        {item.quantity} × {item.title}
                      </span>
                      <span>₹{item.price * item.quantity}</span>
                    </li>
                  ))}
                </ul>
              )}
              {cart.length > 0 && (
                <div className="mt-4 font-bold text-lg flex justify-between">
                  <span>Total:</span>
                  <span>₹{totalAmount}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold transition ${buttonClasses}`}
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage;
