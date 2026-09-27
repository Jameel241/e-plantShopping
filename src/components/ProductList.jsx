import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { useState } from "react";
import Navbar from "./Navbar";

const plants = [
  // Air Purifying
  { id: 1, name: "Snake Plant", price: 15, category: "Air Purifying" },
  { id: 2, name: "Spider Plant", price: 12, category: "Air Purifying" },
  { id: 3, name: "Peace Lily", price: 20, category: "Air Purifying" },
  { id: 4, name: "Aloe Vera", price: 10, category: "Medicinal" },
  { id: 5, name: "Tulsi", price: 8, category: "Medicinal" },
  { id: 6, name: "Mint", price: 6, category: "Medicinal" },
  { id: 7, name: "Rose", price: 18, category: "Flowering" },
  { id: 8, name: "Jasmine", price: 16, category: "Flowering" },
  { id: 9, name: "Lavender", price: 14, category: "Flowering" },
];

function ProductList() {
  const dispatch = useDispatch();
  const [added, setAdded] = useState({});

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAdded({ ...added, [plant.id]: true });
  };

  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <>
      <Navbar />

      <div style={{ padding: 30 }}>
        {categories.map((category) => (
          <div key={category}>
            <h2>{category}</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
                marginBottom: 30,
              }}
            >
              {plants
                .filter((p) => p.category === category)
                .map((plant) => (
                  <div
                    key={plant.id}
                    style={{
                      border: "1px solid #ccc",
                      padding: 20,
                      borderRadius: 10,
                    }}
                  >
                    <img
                      src="https://via.placeholder.com/150"
                      alt={plant.name}
                    />

                    <h3>{plant.name}</h3>

                    <p>${plant.price}</p>

                    <button
                      disabled={added[plant.id]}
                      onClick={() => handleAdd(plant)}
                    >
                      {added[plant.id] ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
