import { useState } from "react";
import "./App.css";

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Grapes",
  "Watermelon",
  "Papaya",
  "Strawberry",
  "Kiwi",
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main className="app">
      <div className="search-card">
        <p className="eyebrow">React Search Filter</p>
        <h1>Searchable List</h1>
        <p className="description">
          Type in the input box to filter the list instantly.
        </p>

        <input
          type="text"
          placeholder="Search fruits..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <ul className="fruit-list">
          {filteredFruits.length > 0 ? (
            filteredFruits.map((fruit, index) => (
              <li key={index} className="fruit-item">
                {fruit}
              </li>
            ))
          ) : (
            <li className="no-results">No fruits found.</li>
          )}
        </ul>
      </div>
    </main>
  );
}
