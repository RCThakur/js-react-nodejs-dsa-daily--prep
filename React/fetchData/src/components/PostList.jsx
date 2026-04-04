// src/components/PostList.jsx
import usePosts from "../hooks/usePosts";

export default function PostList() {
  const {
    posts,
    processedPosts,
    loading,
    error,
    search,
    sortOrder,
    setSortOrder,
    handleSearchChange,
  } = usePosts();

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
      <div style={{ display: "flex", gap: "8px", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={handleSearchChange}
          style={{ flex: 1, padding: "8px" }}
        />

        <button
          onClick={() => setSortOrder((o) => (o === "asc" ? "desc" : "asc"))}
        >
          Sort: {sortOrder === "asc" ? "A → Z" : "Z → A"}
        </button>
      </div>

      <p style={{ color: "#666", fontSize: "13px" }}>
        {processedPosts.length} of {posts.length} posts
      </p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {processedPosts.map((post) => (
          <li
            key={post.id}
            style={{ padding: "12px", borderBottom: "1px solid #eee" }}
          >
            <strong style={{ textTransform: "capitalize" }}>
              {post.title}
            </strong>
            <p style={{ color: "#666", fontSize: "13px", marginTop: "4px" }}>
              {post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
