import "./App.css";
import Button from "./components/Button";
import Product from "./components/Product";

function App() {
  const employees = [
    { id: 1, name: "Nilesh", role: "Frontend Developer" },
    { id: 2, name: "Rahul", role: "Backend Developer" },
    { id: 3, name: "Aman", role: "UI Designer" },
  ];
  return <Product list={employees} />;
}

export default App;
