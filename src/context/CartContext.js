import { createContext, useContext, useState, useMemo } from "react"

const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const[cart, setCart] = useState([]);

    // add the product to the cart

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if(existingItem){
                return prevCart.map((item) =>
                    item.id === product.id ? {...item, quantity: item.quantity + 1 } :item
                );
            } else {
                return [...prevCart, {...product, quantity: 1}];

            }
        })
    }

    // remove product from the cart
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id))
    }

    // clear the entire cart
    const clearCart = () => {
        setCart([])
    }

    // check if proudct is already in cart
    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }


    // calcualte total number of items in the cart
    const cartCount = useMemo(() => {
        return cart.reduce((total, item) => total + item.quantity, 0)
    }, [cart]);


    return(
        <CartContext.Provider value = {{cart, addToCart, removeFromCart, clearCart, isInCart, cartCount}}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => useContext(CartContext)