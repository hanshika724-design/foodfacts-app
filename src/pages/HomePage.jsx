import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FoodList from "../components/FoodList";

function HomePage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query) => {
    if (!query) return;

    setLoading(true);
    setHasSearched(true);

    try {
      const res = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&json=1`
      );
      const data = await res.json();
      setResults(data.products || []);
    } catch (err) {
      console.error("Error fetching data:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <h1 className="logo">🍎 FoodFacts</h1>

      {/* Navbar */}
      <div style={{ marginBottom: "20px" }}>
        <a href="/" style={{ marginRight: "15px" }}>Home</a>
        <a href="/saved">Saved</a>
      </div>

      {/* Search */}
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {!loading && !hasSearched && (
        <p className="info">Search for a food to see nutrition info 🍎</p>
      )}

      {!loading && hasSearched && results.length === 0 && (
        <p className="error">No results found ❌</p>
      )}

      {!loading && results.length > 0 && <FoodList products={results} />}
    </div>
  );
}

export default HomePage;