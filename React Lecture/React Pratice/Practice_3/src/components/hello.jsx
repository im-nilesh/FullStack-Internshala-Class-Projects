import React, { useState } from "react";

export default function Hello({ naam }) {
  const [user, setUser] = useState(naam);
  function handleClick() {
    setUser("Hello Laxmi");
  }
  return (
    <div>
      <h1>{user}</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
