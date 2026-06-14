import { useMemo, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(0);

  function handleInp(e) {
    setVal(e.target.value);
  }

  let ans = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= val; i++) {
      sum += i;
    }
    return sum;
  }, [val]);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <input type="number" onChange={handleInp} />
      <h2>sum = {ans}</h2>
      <button onClick={handleClick}> Count = {count} </button>
    </>
  );
}
export default Counter;
