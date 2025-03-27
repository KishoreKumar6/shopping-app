
import {useState, useEffect} from "react";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";

function Home() {
    const[products, setProducts] = useState([]);
    const[filterProducts, setFilterProducts] = useState([]);
    const[searchTerm, setSearchTerm] = useState('');
    const[category, setCategory] = useState('');
    
    
    // fetch the products from the api
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products")
                const data = await response.json();
                setProducts(data);
                setFilterProducts(data);
            } catch(error){
                console.error("Error fetching the products from the backend")
            }
        };
        fetchProducts();
    }, []);

    // handle the filtering and search

    useEffect(() => {
        let updatedProducts = products;
        if(category){
            updatedProducts = updatedProducts.filter(
                (product) => product.category === category
            )
        }

        if(searchTerm){
            updatedProducts = updatedProducts.filter((product) => 
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            
            )
        };

        setFilterProducts(updatedProducts);

    }, [category, searchTerm, products]);


    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-4">Products</h2>
            
            {/* search and filter */}
            <div className="flex gap-4 mb-6">
                <SearchBar onSearch = {setSearchTerm}/>
                <Filter onFilter = {setCategory}/>
            </div>

            {/* display the products */}
              
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filterProducts.map((product) => (
                    <ProductCard key = {product.id} product = {product} />
                ))}
            </div>
        </div>
    )

}

export default Home



// fetch products, display the search results and filter

// products
// filter
// search
