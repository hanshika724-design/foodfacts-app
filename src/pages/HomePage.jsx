import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FoodList from "../components/FoodList";

function HomePage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (query) => {
    console.log(query); // temp (we'll add API later)
    setHasSearched(true);
  };

  return (
    <div className="home">
      <h2 className="title">Search Food Nutrition</h2>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {!loading && !hasSearched && (
        <p className="info">Search for a food to see nutrition info 🍎</p>
      )}

      {!loading && hasSearched && results.length === 0 && (
        <p className="error">No results found ❌</p>
      )}

      {!loading && results.length > 0 && (
        <FoodList products={results} />
      )}
    </div>
  );
}

export default HomePage;