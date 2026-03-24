import "./App.css";

import TitleUpdater from "./components/TitleUpdater";
import FetchData from "./components/FetchData";
import Timer from "./components/Timer";
import ResizeListener from "./components/ResizeListener";

function App() {
  return (
    <div className="container">
      <h1>useEffect Practice</h1>

      <div className="card">
        <TitleUpdater />
      </div>

      <div className="card">
        <FetchData />
      </div>

      <div className="card">
        <Timer />
      </div>

      <div className="card">
        <ResizeListener />
      </div>
    </div>
  );
}

export default App;
