import React from "react";
import InputFocus from "./components/InputFocus";
import PreviousValue from "./components/PreviousValue";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>UseRef Demo Examples</h1>
      <div className="card">
        <InputFocus />
      </div>
      <div className="card">
        <PreviousValue />
      </div>
    </div>
  );
}

export default App;
