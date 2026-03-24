import { useMemo, useState } from "react";

function ExpensiveCalc() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  const expensiveResult = useMemo(() => {
    console.log("Calculating...");
    return num * 1000;
  }, [num]);

  return (
    <div>
      <h2>Result: {expensiveResult}</h2>
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
      <button onClick={() => setNum(num + 1)}>Change Number</button>
    </div>
  );
}

export default ExpensiveCalc;
