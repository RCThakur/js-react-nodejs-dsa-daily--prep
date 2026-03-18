import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    console.log("Re-Render Happened");
  }

  return (
    <div>
      <h1>Use State Demo</h1>
      <h2>Count Value : {count}</h2>
      <button onClick={handleClick}>Increment by 2</button>
    </div>
  );
}
