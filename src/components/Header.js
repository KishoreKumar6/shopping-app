import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {

    const {cartCount} = useCart();

    return (
        <header className="bg-gray-900 text-white p-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link to="/" className="text-4xl font-bold">
                    Guvi Online Shopping Application
                </Link>

                {/* navigation links */}
                <nav className="space-x-10">
                    <Link to="/" className="hover:text-orange-400 text-2xl"><i className="fa-solid fa-house"></i></Link>
                    <Link to="/cart" className="relative hover:text-orange-400 text-2xl"><i className="fa-solid fa-cart-shopping"></i>
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            {cartCount}
                        </span>
                    )}
                    
                    </Link>
                    <Link to="/checkout" className="hover:text-orange-400 text-2xl">Checkout</Link>

                </nav>


            </div>


        </header>
    )

}

export default Header