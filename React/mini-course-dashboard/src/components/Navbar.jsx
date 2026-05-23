import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Courses</NavLink>
        <NavLink to="/">Saved Courses</NavLink>
        <NavLink to="/">About</NavLink>
      </div>

      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mood" : "Light Mood"}
      </button>
    </nav>
  );
}
