import React, { useState } from "react";

export default function Hello() {
  const [msg, setMsg] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        type="text"
      />
      <h1>{msg}</h1>
    </div>
  );
}
