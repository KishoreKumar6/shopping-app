import { useCart } from "../context/CartContext"

function CartItem({item}) {
    const {removeFromCart} = useCart();

    return(
        <div className="border-b flex p-4 flex justify-between items-center">
            <div>
                    <h3>{item.title}</h3>
                    <p>${item.price} X {item.quantity}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}
                className="bg-red-400 py-2 px-4  text-white rounded"
                >
                Remove
            </button>
        </div>
    )

}

export default CartItem