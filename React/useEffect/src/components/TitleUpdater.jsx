import { useEffect } from "react";
import { useState } from "react";

function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} Times`;
  }, [count]);

  return (
    <div>
      <h2>Title Update</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click Me ({count})
      </button>
    </div>
  );
}

export default TitleUpdater;
