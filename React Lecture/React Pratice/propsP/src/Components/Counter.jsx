import { useState } from "react";

function Counter({ value }) {
  const [val, setVal] = useState(value);

  function Inc() {
    setVal(() => val + 1);
  }
  function Dec() {
    setVal(() => val - 1);
  }
  return (
    <>
      <h1>Counter Pratice</h1>
      <div>
        <button onClick={Inc}>+</button>
        <h2>{val}</h2>
        <button onClick={Dec}>-</button>
      </div>
    </>
  );
}
export default Counter;
