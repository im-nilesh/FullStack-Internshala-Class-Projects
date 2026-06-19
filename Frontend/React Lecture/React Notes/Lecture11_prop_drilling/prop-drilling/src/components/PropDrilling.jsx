import { useContext, useState } from "react";
import { CountContext } from "./context";

function PropDrillinng() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Count />
    </CountContext.Provider>
  );
}

function Count() {
  return (
    <>
      <CountRenderer />
      <Button />
    </>
  );
}

function CountRenderer() {
  const { count } = useContext(CountContext);

  return <h1>Count: {count}</h1>;
}

function Button() {
  const { count, setCount } = useContext(CountContext);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}

export default PropDrillinng;
