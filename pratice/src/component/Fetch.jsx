// import { useEffect, useState } from "react";

import {
  Children,
  memo,
  use,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

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

export default function Fetch() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setUser(data);
      setLoading(false);
    }
    fetchUser();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h3>Users</h3>
      {user.map((item) => {
        return (
          <div key={item.id}>
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>{item.phone}</li>
            <br />
          </div>
        );
      })}
    </div>
  );
}
