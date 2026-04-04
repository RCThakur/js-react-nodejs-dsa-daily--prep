// src/hooks/usePosts.js
import { useState, useEffect, useMemo, useRef } from "react";

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const [debouncedSearch, setDebouncedSearch] = useState("");
  const debounceTimer = useRef(null);

  function handleSearchChange(e) {
    const value = e.target.value;
    setSearch(value);

    clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      setDebouncedSearch(value);
    }, 300);
  }

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        setPosts(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
    return () => controller.abort();
  }, []);

  const processedPosts = useMemo(() => {
    let result = posts;

    if (debouncedSearch.trim()) {
      result = result.filter((post) =>
        post.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
      );
    }

    result = [...result].sort((a, b) => {
      const comparison = a.title.localeCompare(b.title);
      return sortOrder === "asc" ? comparison : -comparison;
    });

    return result;
  }, [posts, debouncedSearch, sortOrder]);

  return {
    posts,
    processedPosts,
    loading,
    error,
    search,
    sortOrder,
    setSortOrder,
    handleSearchChange,
  };
}
