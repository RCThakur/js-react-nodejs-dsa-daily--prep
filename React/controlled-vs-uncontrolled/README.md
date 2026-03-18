# 🎯 Controlled vs Uncontrolled Components in React

This project demonstrates the difference between **Controlled** and **Uncontrolled** components in React

---

## 📌 What You Will Learn

- What are Controlled Components
- What are Uncontrolled Components
- When to use each approach in real applications
- Key differences between them

---

# 🧠 1. Controlled Components

## 📖 Definition

A **controlled component** is a form element whose value is controlled by **React state**.

React becomes the **single source of truth**.

---

# 🧠 2. Uncontrolled Components

## 📖 Definition

An **uncontrolled component** is a form element where the DOM itself manages the state, not React.

We use useRef to access the value.

---

# 🧪 When to Use What?

## ✅ Use Controlled Components when:

- You need validation
- UI depends on input value
- You want full control over form behavior

## ✅ Use Uncontrolled Components when:

- You only need value on submit
- Form is simple
- Performance is critical

---

## ⚖️ Key Differences

| Feature         | Controlled    | Uncontrolled |
| --------------- | ------------- | ------------ |
| Source of Truth | React State   | DOM          |
| Data Access     | useState      | useRef       |
| Re-rendering    | Yes           | No           |
| Validation      | Easy          | Hard         |
| Complexity      | More          | Less         |
| Use Case        | Complex forms | Simple forms |

---

## Best way to answer:

Controlled components use React state as the source of truth, while uncontrolled components rely on the DOM. Controlled components are preferred in most real-world applications because they provide better control, validation, and predictable behavior.
