import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (todo) => {
    setEditId(todo.id);
    setEditValue(todo.text);
  };

  const handleSaveTodo = (id) => {
    if (editValue.trim() === "") return;

    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editValue } : todo,
    );

    setTodos(updatedTodos);
    setEditId(null);
    setEditValue("");
  };

  return (
    <main className="app">
      <div className="todo-card">
        <h1>TODO List</h1>

        <div className="todo-form">
          <input
            type="text"
            placeholder="Enter Your Task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="todo-input"
          />
          <button className="add-btn" onClick={handleAddTodo}>
            Add Task
          </button>
        </div>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              {editId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="edit-input"
                  />
                  <button
                    className="save-btn"
                    onClick={() => handleSaveTodo(todo.id)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span>{todo.text}</span>
                  <div className="action-buttons">
                    <button
                      className="edit-btn"
                      onClick={() => handleEditTodo(todo)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
