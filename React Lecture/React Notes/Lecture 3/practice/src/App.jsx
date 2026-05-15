import "./App.css";
import Product from "./components/Product";

function App() {
  const products = [
    { id: 1, title: "iPhone", price: 70000 },
    { id: 2, title: "Samsung", price: 50000 },
    { id: 3, title: "OnePlus", price: 40000 },
  ];
  return <Product product={products} />;
}

export default App;
