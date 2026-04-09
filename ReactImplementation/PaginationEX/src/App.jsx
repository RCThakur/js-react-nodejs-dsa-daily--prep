import { useState, useEffect, useMemo } from "react";
import "./App.css";

const ITEMS_PER_PAGE = 8;

export default function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔥 Fetch API
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        const res = await fetch("https://dummyjson.com/products?limit=100");

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  //Categories
  const categories = useMemo(() => {
    const unique = new Set(products.map((p) => p.category));
    return ["all", ...unique];
  }, [products]);

  //Filter
  const filteredProducts = useMemo(() => {
    return category === "all"
      ? products
      : products.filter((p) => p.category === category);
  }, [products, category]);

  //Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / ITEMS_PER_PAGE),
  );

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  //Handlers
  function handleCategoryChange(cat) {
    setCategory(cat);
    setCurrentPage(1);
  }

  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage((p) => p + 1);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage((p) => p - 1);
    }
  }

  //UI States
  if (loading) return <p className="center">Loading...</p>;
  if (error) return <p className="center">Error: {error}</p>;

  return (
    <div className="container">
      <h1>Product Store</h1>

      {/* Filters */}
      {/* <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`filter-btn ${category === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div> */}

      {/* No Data */}
      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <>
          {/* Product Grid */}
          <div className="grid">
            {paginatedProducts.map((product) => (
              <div key={product.id} className="card">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="image"
                />
                <h4 className="title">{product.title}</h4>
                <p className="price">₹ {product.price}</p>
                <p className="category">{product.category}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
              ← Prev
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button onClick={nextPage} disabled={currentPage === totalPages}>
              Next →
            </button>
          </div>
        </>
      )}
    </div>
  );
}
