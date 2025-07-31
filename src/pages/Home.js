import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import useDarkMode from "../hooks/useDarkMode";

function Home() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilterProducts(data);
      } catch (error) {
        console.error("Error fetching the products from the backend");
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let updatedProducts = products;

    if (category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    if (searchTerm) {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilterProducts(updatedProducts);
  }, [category, searchTerm, products]);

  const textColor = darkMode ? "text-white" : "text-black";
  const buttonClasses = darkMode
    ? "bg-yellow-400 text-black hover:bg-yellow-300"
    : "bg-gray-800 text-white hover:bg-gray-700";

  return (
    <div
      className={`min-h-screen ${textColor}`}
      style={{
        backgroundImage: "url('/image.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for readability */}
      <div
        className={`min-h-screen w-full bg-black/60 ${
          darkMode ? "bg-black/80" : "bg-white/10"
        } backdrop-blur-sm`}
      >
        <div className="container mx-auto p-6">
          {/* Header + Toggle */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Products</h2>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-2 rounded ${buttonClasses}`}
            >
              {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>

          {/* Filters */}
          <div className="flex gap-4 mb-6">
            <SearchBar onSearch={setSearchTerm} />
            <Filter onFilter={setCategory} />
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filterProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
