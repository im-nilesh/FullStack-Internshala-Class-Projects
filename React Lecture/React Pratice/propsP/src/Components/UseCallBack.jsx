import { useCallback, useState } from "react";

function UseCallBack() {
  const [count, setCount] = useState(0);

  const greet = () => {
    console.log("Hello");
  };

  const greeting = useCallback(() => {
    console.log("Helloing");
  }, []);

  greet(); //rerenders everytime
  greeting(); //only once
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </>
  );
}
export default UseCallBack;
