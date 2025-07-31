import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart, incrementQuantity, decrementQuantity } = useCart();

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-4 flex justify-between items-center transition duration-300 hover:shadow-lg">
      <div>
        <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          ${item.price} × {item.quantity} ={" "}
          <span className="font-semibold text-green-600">
            ${item.price * item.quantity}
          </span>
        </p>
        <div className="flex items-center space-x-3 mt-3">
          <button
            onClick={() => decrementQuantity(item.id)}
            className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold px-3 py-1 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            −
          </button>
          <span className="text-md font-medium text-gray-700">
            {item.quantity}
          </span>
          <button
            onClick={() => incrementQuantity(item.id)}
            className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold px-3 py-1 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
