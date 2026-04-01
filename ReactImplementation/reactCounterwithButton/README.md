# React Counter App

A simple React counter project with Increment, Decrement, and Reset buttons. This project is useful for practicing `useState`, event handling, and component re-rendering in React.

## Features

- Increase the counter value by 1 with the Increment button.
- Decrease the counter value by 1 with the Decrement button.
- Reset the counter back to 0 with the Reset button.
- Uses the `useState` Hook to store and update the count state in a functional component.

## Project Structure

```bash
src/
├── App.js
├── App.css
└── main.jsx
```

## Step-by-step build

### 1. Create the component

Create an `App.js` file and import `useState` from React.

```jsx
import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
```

### 2. Add the state

Initialize `count` with `0` so the counter starts from zero.

```jsx
const [count, setCount] = useState(0);
```

### 3. Create event handlers

```jsx
const handleIncrement = () => {
  setCount((prevCount) => prevCount + 1);
};

const handleDecrement = () => {
  setCount((prevCount) => prevCount - 1);
};

const handleReset = () => {
  setCount(0);
};
```

### 4. Build the UI

Render the current count and connect each button to its click handler with `onClick`.

### 5. Add styling

Use `App.css` to style the app layout, counter box, and buttons.

## How to run

1. Create a React app with Vite or open your existing React project.
2. Replace the content of `src/App.js` with the code above.
3. Replace or create `src/App.css` with the CSS above.
4. Run `npm install` if needed.
5. Start the project with `npm run dev`.

## What you learn

- How `useState` stores local component state.
- How button clicks trigger event handlers.
- How updating state causes the UI to re-render.
- How to keep React code clean by separating state, handlers, and JSX.
