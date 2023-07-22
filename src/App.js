import './App.css';
import React, {useState, useEffect} from 'react';
import WeatherWidget from './WeatherWidget';
import AddCity from './AddCity';

function App() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const storedLocations = JSON.parse(localStorage.getItem("Locations"));
    if (storedLocations) {
      setLocations(storedLocations);
    }
  }, []);

  const addLocation = (country, city) => {
    const newLocations = [...locations, {city: city, country: country}];
    setLocations(newLocations);
    localStorage.setItem("Locations", JSON.stringify(newLocations));
  }

  const removeLocation = (index) => {
    const newLocations = [...locations];
    newLocations.splice(index, 1);
    setLocations(newLocations);
    localStorage.setItem("Locations", JSON.stringify(newLocations));
  }

  return (
    <div>
      <h1>Hello Weather</h1>
      <AddCity addLocation={addLocation}/>
      <div className='cards'>
        {locations.map((location, index) => {
          return (
            <WeatherWidget key={index} index={index} city={location.city} country={location.country} removeLocation={(index) => removeLocation(index)}/>
          ); 
        })} 
      </div>
    </div>  
    );
}

export default App;
