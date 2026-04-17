# React Dynamic Form

A simple React dynamic form where users can add or remove input fields.  
This project is useful for practicing array state updates, controlled inputs, repeated field rendering, and safe key usage in React.

## Features

- Add new input fields dynamically.
- Remove existing input fields.
- Update each input independently.
- Render repeated inputs using `map()`.
- Manage form fields with `useState`.

## Project Structure

```bash
src/
├── App.jsx
├── App.css
└── main.jsx
```

## How It Works

The form stores all inputs in an array of objects.  
Each field has its own `id` and `value`, which makes add, update, and remove operations easier to manage.

## Main Logic

### Initial state

```jsx
const [fields, setFields] = useState([{ id: Date.now(), value: "" }]);
```

### Add field

```jsx
const handleAddField = () => {
  const newField = {
    id: Date.now() + Math.random(),
    value: "",
  };

  setFields([...fields, newField]);
};
```

### Update field

```jsx
const handleChange = (id, newValue) => {
  const updatedFields = fields.map((field) =>
    field.id === id ? { ...field, value: newValue } : field,
  );
  setFields(updatedFields);
};
```

### Remove field

```jsx
const handleRemoveField = (id) => {
  const updatedFields = fields.filter((field) => field.id !== id);
  setFields(updatedFields);
};
```

## Concepts Used

- `useState`
- Controlled inputs
- Array `map()`
- Array `filter()`
- Dynamic rendering in React

## Why unique keys matter

Each rendered field should have a stable key so React can correctly identify which input was added, removed, or updated. In dynamic forms, stable ids are safer than relying only on array indexes.

## Future Improvements

- Add validation for empty fields.
- Add name and email inputs in each row.
- Show submitted values on screen.
- Disable remove when only one field remains.
- Add form submission with API integration.

```

```
