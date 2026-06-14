import { useEffect } from "react";
import { useState } from "react";

function SideEffect() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const API = "https://jsonplaceholder.typicode.com/todos";
    fetch(API)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res);
        setTodos(res);
      })

      .catch((err) => {
        return err;
      });
  }, []);
  return (
    <div>
      <h1>API calling</h1>
      {todos.map((item) => {
        return (
          <div>
            <h1>{item.id}</h1>
            <h1>{item.title}</h1>
            <h1>{item.complete}</h1>
          </div>
        );
      })}
    </div>
  );
}
export default SideEffect;
