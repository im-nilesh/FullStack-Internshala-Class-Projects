import { useEffect, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 40000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h1>{timer}</h1>;
}

export default Timer;
