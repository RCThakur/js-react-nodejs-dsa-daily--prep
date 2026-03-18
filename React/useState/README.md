# ⚛️ useState Hook

## 📌 What is useState?

useState is a React Hook used to manage state in functional components.
const [state, setState] = useState(initialValue);

---

## 🔥 Key Concepts

### 1. State is Async

- Updates don’t happen immediately
- React batches updates

---

### 2. Functional Updates

setCount(prev => prev + 1);

✅ Always use when:

- Updating based on previous state

---

### 3. Batching

Multiple updates are combined into one render.

---

## 🎯 Key Learning

- Never rely on immediate state update
- Use functional updates for accuracy
