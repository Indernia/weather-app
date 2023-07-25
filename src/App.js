import './App.css';
import React, {useState, useEffect} from 'react';
import AddCity from './AddCity';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';

function App() {
  const [data, setData] = useState();
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null});
  
  useEffect( () => {
    if (coordinates.lat === null) {
      getLocation();
    }
    console.log(coordinates);
  }, []);
  
  useEffect(() => { 
    const fetchData = async () => {
        const responseData = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
        const data = await responseData.json();
        console.log(data);
        setData(data);
    }
    if (coordinates.lat !== null){
      console.log(coordinates);
      fetchData();
    }
  }, [coordinates]);

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
  if (!data){
    console.log("loading data");
    return (
      <div> 
        loading...
      </div>
    )
  }
  return (
    <div>
      <CurrentWeather currentData={data.current} dailyData={data.daily}/>
      <HourlyForecast hourlyData={data.hourly}/>
    </div>  
    )
}

export default App;
