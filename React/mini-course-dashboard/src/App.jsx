import { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/ThemeContext";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
