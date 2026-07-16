import { useState } from "react";

export default function CharcCounter() {
  const [counter, setCounter] = useState();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setCounter(Number(e.target.value.length));
        }}
      />
      <h4>Character Count is : {counter}</h4>
    </div>
  );
}
