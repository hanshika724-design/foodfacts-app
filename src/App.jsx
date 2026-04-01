import { useState } from "react";
import SearchBar from "./components/SearchBar";
import FoodList from "./components/FoodList";

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query) => {
    if (!query) return;

    setLoading(true);
    setHasSearched(true);

    try {
      const res = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(
          query
        )}&search_simple=1&action=process&json=1`
      );

      const data = await res.json();

      // ✅ FIXED FILTER
      const filtered = data.products.filter(
        (p) =>
          (p.product_name && p.product_name.trim() !== "") ||
          (p.generic_name && p.generic_name.trim() !== "")
      );

      setResults(filtered);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>FoodFacts</h1>

      <SearchBar onSearch={handleSearch} />

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Before search */}
      {!loading && !hasSearched && (
        <p>Search for a food to see nutrition info 🍎</p>
      )}

      {/* No results */}
      {!loading && hasSearched && results.length === 0 && (
        <p>No results found ❌</p>
      )}

      {/* Results */}
      {!loading && results.length > 0 && (
        <FoodList products={results} />
      )}
    </div>
  );
}
// Final version ready for submission

export default App;