import React from "react";
import { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter Text" />
      <button onClick={handleFocus}>Focus Input Box</button>
    </div>
  );
};

export default InputFocus;
