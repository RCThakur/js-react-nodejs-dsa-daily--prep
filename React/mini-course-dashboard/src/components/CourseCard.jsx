import { Link } from "react-router-dom";
import React from "react";

function CourseCard() {
  return (
    <div>
      <h2>{Course.title}</h2>
      <p>Category:{course.category}</p>
      <p>Duration:{course.duration}</p>
      <p>Level:{course.level}</p>
      <p>Price:{course.price}</p>

      <Link to={`/courses/${course.id}`}>
        <button>View Details</button>
      </Link>

      <button onClick={() => saveCourse(course)}>Save Course</button>
    </div>
  );
}

export default React.memo(CourseCard);
