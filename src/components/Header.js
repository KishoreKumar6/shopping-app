import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cartCount } = useCart();

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-yellow-400 hover:text-yellow-300 transition duration-300"
        >
          🛒 Shopping-Cart
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 text-xl sm:text-2xl">
          <Link
            to="/"
            className="hover:text-orange-400 transition duration-300"
            aria-label="Home"
          >
            <i className="fa-solid fa-house"></i>
          </Link>

          <Link
            to="/cart"
            className="relative hover:text-orange-400 transition duration-300"
            aria-label="Cart"
          >
            <i className="fa-solid fa-cart-shopping"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/checkout"
            className="hover:text-orange-400 transition duration-300"
          >
            <i className="fa-solid fa-credit-card"></i>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
