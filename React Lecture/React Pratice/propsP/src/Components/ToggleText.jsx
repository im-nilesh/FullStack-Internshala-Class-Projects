import { useState } from "react";

function ToggleText({ state, text }) {
  let [varr, setVar] = useState(!state);
  function handleClick() {
    if (varr) {
      setVar("Bye");
    } else {
      setVar("Hello");
    }
  }

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default ToggleText;

//wrong code
