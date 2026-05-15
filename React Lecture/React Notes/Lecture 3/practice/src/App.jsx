import "./App.css";
import List from "./components/List";

function App() {
  const items = ["pen", "pencil", "ruler", "eraser"];
  return <List header="Items" items={items} />;
}

export default App;
