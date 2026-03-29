import React, { useState, useEffect } from "react";

const PaginationExample = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const LIMIT = 10;

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${LIMIT}`,
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await res.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", fontSize: "30px" }}>
        Pagination Example
      </h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading &&
        data.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #bd2f2f",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </div>
        ))}

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>Page {page}</span>

        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default PaginationExample;
