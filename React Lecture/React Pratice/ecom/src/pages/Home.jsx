import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);
  if (error) {
    return <h3>{error}</h3>;
  }
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <>
      <h1>Home</h1>
      <h2>All Products : </h2>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </>
  );
}
export default Home;
