import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";


function ProductDetails() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const {addToCart, isInCart} = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data)
            } catch(error){
                console.log("Error fetching products")
            }
        };
        fetchProduct();
    }, [id]);

    if(!product) return <p>Loading.......</p>

    return (
        <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            {/* product image */}
            <img 
                src= {product.image}
                alt= {product.title}
                className="w-full h-40 object-contain"
            />
            {/* product title */}
            <h3 className="text-lg font-bold mt-2">
                {product.title}
            </h3>


            {/* product price */}
            <p className="text-gray-600 text-xl mt-1">
                ${product.price}
            </p>

            <button onClick={() => addToCart(product)}
            disabled = {isInCart(product.id)}
            
            className= {`mt-4 py-2 px-4 rounded ${isInCart(product.id) ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-400'} text-white`}
              >  {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
            </button>
        </div>
    )

}

export default ProductDetails