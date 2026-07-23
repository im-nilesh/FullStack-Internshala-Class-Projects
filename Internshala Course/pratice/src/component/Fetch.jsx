// import { useEffect, useState } from "react";

import { useCallback, useEffect, useMemo, useState } from "react";

// import {
//   Children,
//   memo,
//   use,
//   useCallback,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";

// import { useMemo, useState } from "react";

// export default function Fetch() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     async function fetchUsers() {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users",
//       );
//       const data = await response.json();
//       setUsers(data);
//     }
//     fetchUsers();
//   }, []);
//   return (
//     <div>
//       <h1>User Lists</h1>
//       <p>
//         {users.map((item, index) => {
//           return <li key={index}>{item.name}</li>;
//         })}
//       </p>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";

// export default function Fetch() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     async function fetchUsers() {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users",
//       );
//       const data = await response.json();
//       setUsers(data);
//     }
//     fetchUsers();
//   }, []);
//   return (
//     <div>
//       <h1>USER LISTS :</h1>
//       <p>
//         {users.map((name, index) => {
//           return <li key={index}>{name.name}</li>;
//         })}
//       </p>
//     </div>
//   );
// }

// // useMemo example  :

// export default function Fetch() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");
//   function slowFunction() {
//     console.log("Calculating...");
//     let sum = 0;
//     for (let i = 0; i < 100000; i++) {
//       sum += 1;
//     }
//     return sum;
//   }
//   // const result = useMemo(() => {
//   //   return slowFunction();
//   // }, []);
//   const result = slowFunction();
//   return (
//     <div>
//       <h2>Result: {result}</h2>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Count: {count}
//       </button>
//       <input
//         type="text"
//         placeholder="Type here"
//         value={text}
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//       />
//     </div>
//   );
// }

// export default function Fetch() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");
//   function slowFunction() {
//     let sum = 0;
//     for (let i = 0; i < 10000; i++) {
//       console.log("calculating...");
//       sum += i;
//     }
//     return sum;
//   }
//   const result = useMemo(() => {
//     return slowFunction();
//   }, []);
//   return (
//     <div>
//       <h4>Result = {result}</h4>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Count: {count}
//       </button>
//       <input
//         type="text"
//         placeholder="Enter sommething"
//         value={text}
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//       />
//       <h4>{text}</h4>
//     </div>
//   );
// }

// useRef Example :

// export default function Fetch() {
//   const [count, setCount] = useState(0);
//   const previousCount = useRef(0);

//   function increase() {
//     previousCount.current = count;
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <h2>Current Count : {count}</h2>
//       <h3>Previous Count: {previousCount.current}</h3>
//       <button onClick={increase}>Increase</button>
//     </div>
//   );
// }

// memo example:

// const Child = memo(function Child() {
//   console.log("Child Rendered");
//   return <h2>Child Component</h2>;
// });
// const Child = function Child() {
//   console.log("Child rendered");

//   return <h2>Child Component</h2>;
// };
// export default function Fetch() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Count: {count}
//       </button>
//       <Child />
//     </div>
//   );
// }

// useCallback

// const Child = memo(({ handleClick }) => {
//   console.log("Child Rendered");
//   return <button onClick={handleClick}>Child Button</button>;
// });

// export default function Fetch() {
//   const [count, setCount] = useState(0);

//   // const handleClick = useCallback(() => {
//   //   alert("Child button clicked");
//   // }, []);

//   const handleClick = () => {
//     alert("Child Clicked");
//   };
//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increase Count
//       </button>
//       <br />
//       <br />

//       <Child handleClick={handleClick} />
//     </div>
//   );
// }

// export default function Fetch() {
//   const [user, setUser] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchUser() {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users",
//       );
//       const data = await response.json();
//       setUser(data);
//       setLoading(false);
//     }
//     fetchUser();
//   }, []);

//   if (loading) {
//     return <h1>Loading...</h1>;
//   }
//   return (
//     <div>
//       <h3>Users</h3>
//       {user.map((item) => {
//         return (
//           <div key={item.id}>
//             <li>{item.name}</li>
//             <li>{item.email}</li>
//             <li>{item.phone}</li>
//             <br />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default function Fetch() {
//   const [displayTask, setDisplayTask] = useState([]);
//   const [task, setTask] = useState("");
//   return (
//     <div>
//       <input
//         placeholder="Enter You Task"
//         type="text"
//         value={task}
//         onChange={(e) => {
//           setTask(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           setDisplayTask([...displayTask, task]);
//           setTask("");
//         }}
//       >
//         Add Task
//       </button>
//       <ul>
//         {displayTask.map((item, index) => {
//           return <li key={index}>{item}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }

// export default function Fetch() {
//   const [dark, setDark] = useState(false);
//   return (
//     <div
//       style={{
//         backgroundColor: dark ? "black" : "white",
//         color: dark ? "white" : "black",
//         minHeight: "100vh",
//       }}
//     >
//       <button
//         onClick={() => {
//           setDark(!dark);
//         }}
//       >
//         {dark ? "Switch to light" : "Switch to dark"}
//       </button>
//       <h1>Hello React</h1>
//       <p>This is a theme toggler</p>
//     </div>
//   );
// }

// export default function Fetch() {
//   const [user, setUser] = useState([]);

//   useEffect(() => {
//     async function getUsers() {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/users`,
//       );
//       const data = await response.json();
//       setUser(data);
//     }
//     getUsers();
//   }, []);
//   return (
//     <div>
//       <h3>Users</h3>
//       {user.map((user) => {
//         return (
//           <div key={user.id}>
//             <li>{user.id}</li>
//             <li>{user.name}</li>
//             <br />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default function Fetch() {
//   const [onn, setOnn] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setOnn(!onn);
//         }}
//       >
//         Toggle
//       </button>
//       <h1>{onn ? "On" : "Off"}</h1>
//     </div>
//   );
// }

// export default function Fetch() {
//   const [dark, setDark] = useState(false);
//   return (
//     <div
//       style={{
//         backgroundColor: dark ? "black" : "white",
//         color: dark ? "white" : "black",
//         height: "100vh",
//       }}
//     >
//       <h1>{dark ? "This is the dark theme" : "This is Light theme"}</h1>
//       <button
//         onClick={() => {
//           setDark(!dark);
//         }}
//       >
//         {dark ? "Switch to Light" : "Switch to Dark"}
//       </button>
//     </div>
//   );
// }

// export default function Fetch({ name }) {
//   return (
//     <div>
//       <h2>{`Hello ${name}`}</h2>
//     </div>
//   );
// }

// import React from "react";

// export default function Fetch() {
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//       />
//       <h1>{text}</h1>
//     </div>
//   );
// }

// import React from "react";

// export default function Fetch() {
//   const [showText, setShowText] = useState(false);
//   return (
//     <div>
//       <h1>
//         {showText
//           ? "This is a test header that is goin to disapper when you click on the button"
//           : ""}
//       </h1>
//       <button
//         onClick={() => {
//           setShowText(!showText);
//         }}
//       >
//         {showText ? "Do Not click me" : "Click me to see the text"}
//       </button>
//     </div>
//   );
// }

// import React from "react";

// export default function Fetch() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [show, setShow] = useState(false);
//   function handleClick() {
//     setShow(!show);
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         placeholder="Enter your name"
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />
//       <input
//         type="text"
//         value={age}
//         placeholder="Enter your Age"
//         onChange={(e) => {
//           setAge(e.target.value);
//         }}
//       />
//       <input
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />
//       <button onClick={handleClick}>Display Details</button>
//       {show ? (
//         <>
//           <h1>`Your name is ${name}`</h1>
//           <h1>`Your age is ${age}`</h1> <h1>`Your email is ${email}`</h1>
//         </>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }

// export default function Fetch() {
//   const [text, setText] = useState("");
//   const [displayTask, setDisplayTask] = useState([]);
//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         placeholder="Enter the Task"
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           setDisplayTask([...displayTask, text]);
//           setText("");
//         }}
//       >
//         Add Task
//       </button>
//       <ul>
//         {displayTask.map((task, index) => {
//           return <li key={index}>{task}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }

// import React from "react";
// const Child = React.memo(function Child() {
//   console.log("Child Rendered");
//   return (
//     <>
//       <h1>Child</h1>
//     </>
//   );
// });

// export default function Fetch() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         {count}
//       </button>
//       <Child />
//     </div>
//   );
// }

// import React from "react";

// export default function Fetch() {
//   const calc = useMemo(() => {
//     console.log("Calculating");

//     let sum = 0;

//     for (let i = 0; i < 1000; i++) {
//       sum += 1;
//     }
//     return sum;
//   }, []);
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       {calc}
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         {count}
//       </button>
//     </div>
//   );
// }

// import React from "react";
// import Child from "./Child";
// import { use } from "react";

// export default function Fetch() {
//   const greet = useCallback(() => {
//     console.log("Hello");
//   }, []);
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         {count}
//       </button>
//       <Child greet={greet} />
//     </div>
//   );
// }

// import React from "react";
// const Child = React.memo(function Child({ greet }) {
//   console.log("Child Rendered");
//   return <button onClick={greet}>Say hello</button>;
// });

// export default function Fetch() {
//   const [count, setCount] = useState(0);
//   const greet = useCallback(() => {
//     console.log("Hello");
//   }, []);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         {count}
//       </button>
//       <Child greet={greet} />
//     </div>
//   );
// }

// import React from "react";

// export default function Fetch() {
//   const [count, setCount] = useState(0);

//     const calc = useMemo(() => {
//       let sum = 0;
//       console.log("calculating");
//       for (let i = 0; i < 1000; i++) {
//         sum += 1;
//       }
//       return sum;
//     }, []);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         {count}
//       </button>
//       {calc}
//     </div>
//   );
// }

import React from "react";

export default function Fetch() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      setUser(data);
    }
    fetchUser();
  }, []);
  return (
    <div>
      <h1>Posts are :</h1>
      {user.map((posts) => {
        return (
          <div key={posts.id}>
            <li>{posts.title}</li>
            <li>{posts.body}</li>
            <br />
          </div>
        );
      })}
    </div>
  );
}
