// import React from "react";

// const Child = React.memo(function Child({ greet }) {
//   console.log("Child Rendered");
//   return <button onClick={greet}>Say Hello</button>;
// });

// export default Child;

import React from "react";
const Child = React.memo(function Child({ greet }) {
  console.log("Child Rendered");
  return <button onClick={greet}>Say hello</button>;
});
export default Child;
