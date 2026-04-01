function FoodCard({ product }) {
  return (
    <div className="card">
      <h2>
        {product.product_name || product.generic_name || "No Name"}
      </h2>

      <p>{product.brands || "Unknown Brand"}</p>

      <img
        src={product.image_small_url || "https://via.placeholder.com/100"}
        alt={product.product_name || product.generic_name || "food"}
      />

      <p>Calories: {product.nutriments?.["energy-kcal_100g"] ?? "N/A"}</p>
      <p>Protein: {product.nutriments?.proteins_100g ?? "N/A"}</p>
      <p>Carbs: {product.nutriments?.carbohydrates_100g ?? "N/A"}</p>
      <p>Fat: {product.nutriments?.fat_100g ?? "N/A"}</p>
    </div>
  );
}

export default FoodCard;