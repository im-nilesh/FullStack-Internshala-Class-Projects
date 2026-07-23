import { useEffect, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }, [timer]);

  return <h1>{timer}</h1>;
}

export default Timer;

//interview question
