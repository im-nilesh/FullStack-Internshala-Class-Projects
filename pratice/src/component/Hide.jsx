import React, { useState } from "react";

export default function Hide() {
  const [showPassword, setShowPassword] = useState(false);
  function handleClick() {
    setShowPassword(!showPassword);
  }
  return (
    <div>
      <input type={showPassword ? "text" : "password"} />
      <button onClick={handleClick}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}
