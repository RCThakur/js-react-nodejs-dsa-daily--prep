import { useState } from "react";
import "./App.css";

export default function App() {
  const [fields, setFields] = useState([{ id: Date.now(), value: "" }]);

  const handleChange = (id, newValue) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, value: newValue } : field,
    );
    setFields(updatedFields);
  };

  const handleAddField = () => {
    const newField = {
      id: Date.now() + Math.random(),
      value: "",
    };

    setFields([...fields, newField]);
  };

  const handleRemoveField = (id) => {
    const updatedFields = fields.filter((field) => field.id !== id);
    setFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <main className="app">
      <div className="form-card">
        <h1>Dynamic Form</h1>

        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div key={field.id} className="field-row">
              <input
                type="text"
                placeholder={`Enter value ${index + 1}`}
                value={field.value}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="form-input"
              />

              <button
                type="button"
                className="remove-btn"
                onClick={() => handleRemoveField(field.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="button-group">
            <button type="button" className="add-btn" onClick={handleAddField}>
              Add Field
            </button>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
