import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import useDarkMode from "../hooks/useDarkMode";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, clearCart, getTotalPrice } = useCart();
  const [darkMode, setDarkMode] = useDarkMode();
  const navigate = useNavigate();

  const bgColor = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";
  const buttonClasses = darkMode
    ? "bg-yellow-400 text-black hover:bg-yellow-300"
    : "bg-gray-800 text-white hover:bg-gray-700";

  const handlePayNow = () => {
    navigate("/checkout");
  };

  return (
    <div className={`${bgColor} ${textColor} min-h-screen`}>
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Shopping cart</h2>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded ${buttonClasses}`}
          >
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {cart.length === 0 ? (
          <p>Your Cart is empty</p>
        ) : (
          <div>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            <div className="text-right mt-6 text-xl font-semibold">
              Total: ${getTotalPrice().toFixed(2)}
            </div>

            <div className="mt-4 flex justify-between space-x-4">
              <button
                onClick={clearCart}
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 hover:cursor-pointer"
              >
                Clear Cart
              </button>

              <button
                onClick={handlePayNow}
                className={`py-2 px-4 rounded ${buttonClasses}`}
              >
                Pay Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
