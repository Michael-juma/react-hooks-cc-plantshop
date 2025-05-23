import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import {useEffect,useState} from "react";

function PlantPage() {

  const [plants,setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); //state for handling searching plants

//GET request-allow all the components to have acccess to plants
async function getPlants(){
  try{ //catching errors
    const response = await fetch("http://localhost:6001/plants");//makes get request
    const data = await response.json(); //converts the response to json format & saves it in a variable dat
    setPlants(data); //updates states(plants) with the data fetched
  }catch (error){
    throw new Error(error);
  }finally{ //used for cleanup, runs no matter what(error or not)
  }
}

//runs some code after the component has been rendered
useEffect(() =>{
  getPlants();
}, [])//([]) part is a dependancy array that ensures the effect runs once the component mounts
//(appears on the screen for the first time)

//filtering plants
const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm setPlants={setPlants}/>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;