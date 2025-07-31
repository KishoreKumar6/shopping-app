import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

function ProductCard({ product }) {
  const { addToCart, isInCart } = useCart();
  const navigate = useNavigate();
  const [darkMode] = useDarkMode();

  const boxShadow = darkMode
    ? "shadow-2xl hover:shadow-[0_4px_20px_rgba(255,255,255,0.5)]"
    : "hover:shadow-2xl";

  return (
    <div
      className={`border-3 p-4 rounded-lg shadow-md hover:shadow-4xl transition duration-300 ${boxShadow}`}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* product image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-fit"
      />
      {/* product title */}
      <h3 className="text-lg font-bold mt-2">{product.title}</h3>

      {/* product price */}

      <span className="flex items-center justify-between space-x-2 mb-4">
        <span className="text-blue-600 text-xl mt-1 font-bold">
          ${product.price}
        </span>
        <span className="text-yellow-500 font-semibold text-xl"></span>
        <span>⭐️{product.rating.rate} / 5</span>
      </span>

      <button
        onClick={() => addToCart(product)}
        disabled={isInCart(product.id)}
        className={`mt-4 py-2 px-4 rounded  ${
          isInCart(product.id)
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-400 cursor-pointer"
        } text-white`}
      >
        {" "}
        {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
