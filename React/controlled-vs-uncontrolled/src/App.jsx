import { useRef, useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  function handleUncontrolled() {
    alert(inputRef.current.value);
  }

  return (
    <div>
      <h1>Controlled vs Uncontrolled Demo</h1>
      <h2>Controlled Input</h2>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <br />
      <br />
      <p>{value}</p>
      <br />
      <br />

      <h2>Uncontrolled Input</h2>
      <input ref={inputRef} />
      <br />
      <br />
      <button onClick={handleUncontrolled}>Submit</button>
    </div>
  );
}
