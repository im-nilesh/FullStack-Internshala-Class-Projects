import { useState } from "react";

function CounterPlus({ value }) {
  const [pos, setPos] = useState(value);
  function increment() {
    setPos((pos) => pos + 1);
    setPos((pos) => pos + 1);
    setPos((pos) => pos + 1);
  }
  function decrement() {
    setPos((pos) => pos - 1);
    setPos((pos) => pos - 1);
    setPos((pos) => pos - 1);
  }
  return (
    <div>
      <button onClick={increment}>+</button>
      <h1>{pos}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
}
export default CounterPlus;
