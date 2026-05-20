import "./App.css";
// import Counter from "./Components/Counter";
import ToggleText from "./Components/ToggleText";

function App() {
  // return <Counter value={0} />;
  return <ToggleText state={true} text="Hello" />;
}

export default App;
