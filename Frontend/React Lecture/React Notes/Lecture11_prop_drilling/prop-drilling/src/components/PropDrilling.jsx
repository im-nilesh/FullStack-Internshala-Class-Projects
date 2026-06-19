import { useState } from "react";

function PropDrillinng() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  );
}

function Count({ count, setCount }) {
  return (
    <>
      <CountRenderrer count={count} />
      <Button count={count} setCount={setCount} />
    </>
  );
}
function CountRenderrer({ count }) {
  return <h1>Count:{count}</h1>;
}
function Button({ count, setCount }) {
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default PropDrillinng;
