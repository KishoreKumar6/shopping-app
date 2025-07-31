import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import useDarkMode from "../hooks/useDarkMode";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, isInCart } = useCart();
  const [darkMode, setDarkMode] = useDarkMode(); // 👈 Dark mode hook

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product");
      }
    };
    fetchProduct();
  }, [id]);

  if (!product)
    return <p className="text-center text-lg font-semibold py-6">Loading…</p>;

  const bgColor = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";

  const buttonClasses = darkMode
    ? "bg-yellow-400 text-black hover:bg-yellow-500"
    : "bg-gray-800 text-white hover:bg-gray-700 ";
  const bgColor1 = darkMode
    ? "hover:shadow-[0_4px_20px_rgba(255,255,255,0.5)] transition duration-300"
    : "shadow-lg hover:shadow-2xl transition duration-300";

  return (
    <div className={`${bgColor} ${textColor} min-h-screen`}>
      <div
        className={`max-w-4xl mx-auto p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ${bgColor1}`}
      >
        {/* Header */}
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-bold">Product Details</h2>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded ${buttonClasses}`}
          >
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-sm object-contain border rounded-lg p-4 bg-gray-100"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-3">{product.title}</h1>
              <p className="mb-4">{product.description}</p>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-yellow-500 font-semibold text-lg">★</span>
                <span>{product.rating.rate} / 5</span>
              </div>
              <p className="text-2xl text-blue-600 font-bold">
                ${product.price}
              </p>
            </div>
            <button
              onClick={() => addToCart(product)}
              disabled={isInCart(product.id)}
              className={`mt-6 w-full py-3 px-4 text-white text-lg font-semibold rounded transition duration-300 ${
                isInCart(product.id)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500"
              }`}
            >
              {isInCart(product.id) ? "✔ Added to Cart" : "🛒 Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
