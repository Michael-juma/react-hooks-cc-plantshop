import React, { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true); // start with 'true' by default

  function handleStockToggle() {
    setInStock(!inStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className={inStock ? "primary" : ""} onClick={handleStockToggle}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;