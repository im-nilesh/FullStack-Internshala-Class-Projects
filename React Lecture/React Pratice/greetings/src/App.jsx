import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Greetings</h1>
      <button onClick={handleClick}>
        Number of times I said I love you {count}
      </button>
    </>
  );
}

export default App;
