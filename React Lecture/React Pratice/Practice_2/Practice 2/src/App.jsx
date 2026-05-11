import "./App.css";
import Dog from "./components/Dog";
import { Animal } from "./components/Animal";
import { Cat } from "./components/Cat";

function App() {
  return (
    <div>
      <Animal />
      <Cat />
      <Dog />
    </div>
  );
}

export default App;
