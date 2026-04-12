# React Todo App

A simple Todo app built with React.  
This project helps you practice `useState`, controlled inputs, list rendering, edit functionality, and delete functionality in React.

## Features

- Add new todo items.
- Edit existing todo items.
- Delete todo items.
- Render lists using `map()`.
- Update array state using `filter()` and `map()`.

## Project Structure

```bash
src/
├── App.jsx
├── App.css
└── main.jsx
```

## Installation

```bash
npm install
npm run dev
```

## Code Explanation

### Add Todo

A new todo object is created and added to the `todos` array.

```jsx
const handleAddTodo = () => {
  if (inputValue.trim() === "") return;

  const newTodo = {
    id: Date.now(),
    text: inputValue,
  };

  setTodos([...todos, newTodo]);
  setInputValue("");
};
```

### Delete Todo

The selected todo is removed by filtering out the matching `id`.

```jsx
const handleDeleteTodo = (id) => {
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  setTodos(updatedTodos);
};
```

### Edit Todo

The selected todo item is switched into edit mode, then updated using `map()`.

```jsx
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
```

## Future Improvements

- Add complete/incomplete toggle.
- Add localStorage support.
- Add filters like All, Active, and Completed.
