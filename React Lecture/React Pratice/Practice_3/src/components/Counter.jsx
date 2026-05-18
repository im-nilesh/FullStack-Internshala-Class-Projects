import { useState } from "react";

function Counter({ value }) {
  const [pos, setPos] = useState(value);
  function increment() {
    setPos(pos + 1);
  }
  function decrement() {
    setPos(pos - 1);
  }
  return (
    <div>
      <button onClick={increment}>+</button>
      <h1>{pos}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
}
export default Counter;
