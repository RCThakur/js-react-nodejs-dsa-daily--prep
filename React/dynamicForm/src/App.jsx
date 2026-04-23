import { useState } from "react";
import "./App.css";

export default function App() {
  const [fields, setFields] = useState([
    { id: Date.now(), value: "", error: "" },
  ]);

  const validateField = (value) => {
    if (value.trim() === "") {
      return "This field is required";
    }
    if (value.trim().length < 3) {
      return "Minimum 3 characters required";
    }
    return "";
  };

  const handleChange = (id, newValue) => {
    const updatedFields = fields.map((field) =>
      field.id === id
        ? {
            ...field,
            value: newValue,
            error: validateField(newValue),
          }
        : field,
    );

    setFields(updatedFields);
  };

  const handleAddField = () => {
    const newField = {
      id: Date.now() + Math.random(),
      value: "",
      error: "",
    };

    setFields([...fields, newField]);
  };

  const handleRemoveField = (id) => {
    const updatedFields = fields.filter((field) => field.id !== id);
    setFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validatedFields = fields.map((field) => ({
      ...field,
      error: validateField(field.value),
    }));

    setFields(validatedFields);

    const hasError = validatedFields.some((field) => field.error !== "");
    if (hasError) return;

    console.log("Submitted Data:", validatedFields);
  };

  return (
    <main className="app">
      <div className="form-card">
        <h1>Dynamic Form Validation</h1>

        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div key={field.id} className="field-wrapper">
              <div className="field-row">
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

              {field.error && <p className="error-text">{field.error}</p>}
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
