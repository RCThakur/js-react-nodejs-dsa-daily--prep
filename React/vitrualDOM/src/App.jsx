import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  console.log("Re-Render Happened");

  return (
    <div>
      <h1>Virtual DOM Demo</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}> Increment </button>
    </div>
  );
}
