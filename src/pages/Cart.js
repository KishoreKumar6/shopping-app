import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";


function Cart() {
    const { cart, clearCart } = useCart();

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Shopping cart</h2>
            {cart.length === 0 ? (
                <p>Your Cart is empty</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <button onClick={clearCart}
                        className="bg-red-400 rounded py-2 px-4 mt-10"
                    >
                        Clear Cart
                    </button>
                </div>
            )}

        </div>
    )


}

export default Cart