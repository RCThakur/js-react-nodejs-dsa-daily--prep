import FilterList from "./components/FilterList";
import "./App.css";
import ExpensiveCalc from "./components/ExpensiveCalc";

function App() {
  return (
    <div className="container">
      <h1>UseMemo Demo Examples</h1>
      <div className="card">
        <FilterList />
      </div>
      <div className="card">
        <ExpensiveCalc />
      </div>
    </div>
  );
}

export default App;
