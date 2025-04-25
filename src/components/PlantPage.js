import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import PlantList from "./PlantList";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Load all plants initially
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  return (
    
      <main>
      <NewPlantForm />
      <Search onSearchResults={setPlants}/>
      <PlantList  plants={plants} />
    </main>
    
      
    
  );
}

export default PlantPage;
