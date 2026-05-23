import { useRef, useState } from "react";
import courseData from "../data/courses";

export default function Courses() {
  const [search, setSearch] = useState("");

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const filterCourses = () => {
    return courseData.filter((course) => {
      const matchSearch = course.title
        .toLowerCase()
        .includes(search.toLowerCase());
    });
  };

  return (
    <div>
      <h2>Courses</h2>
    </div>
  );
}
