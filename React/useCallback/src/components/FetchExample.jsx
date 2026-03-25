import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

export default function FetchExample() {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setData(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
