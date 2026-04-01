import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <main className="app">
      <div className="counter-card">
        <p className="eyebrow">React Counter App</p>
        <h1>Counter</h1>
        <p className="description">
          A simple project to practice useState, click events, and automatic UI
          re-rendering.
        </p>

        <div className="count-box" aria-live="polite">
          {count}
        </div>

        <div className="button-group">
          <button className="btn increment" onClick={handleIncrement}>
            Increment
          </button>
          <button
            className="btn decrement"
            onClick={handleDecrement}
            disabled={count == 0}
          >
            Decrement
          </button>
          <button className="btn reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}
