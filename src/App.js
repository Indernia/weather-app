import './App.css';
import React, {useState, useEffect} from 'react';
import WeatherWidget from './WeatherWidget';
import AddCity from './AddCity';

function App() {
  const [locations, setLocations] = useState([]);
  const [coordinates, setCoordinates] = useState({lat: null, lon: null});

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

  const getLocation = () => {
    if(!navigator.geolocation){
      console.log('Geolocation is not supported by your browser');
      return 0;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({
        lat: position.coords.latitude, 
        lon: position.coords.longitude});
    })
    console.log(coordinates);
  }
  if (coordinates.lat === null) {
    getLocation();
  }
  return (
    <div>
      <h1>Hello Weather</h1>
      <div className='cards'>
        {coordinates.lat === null ? <h2>Loading...</h2> : 
          <WeatherWidget key={1} index={1} coordinates={coordinates} removeLocation={() => removeLocation(1)}/>
        }
      </div>
    </div>  
    );
}

export default App;
