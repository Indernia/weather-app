import React, { useState, useEffect} from 'react';
import './WeatherWidget.css';

function WeatherWidget( { city, country, removeLocation, index }) {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        console.log(`Weather Widget Mounted`);
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`).
        then(response => response.json()).
        then(data => {setWeather(data); console.log(data)});
    }, []);

    if (!weather) {
        return <div>Loading...</div>;
    }

    let conditions = null;
    let windSpeed = null;
    let tempInCelsius = null;
    try {
        windSpeed = weather.wind.speed;
        conditions = weather.weather[0].description;
        tempInCelsius = weather.main.temp - 273.15;
    } catch (error) {
        console.error(error);
        removeLocation(index);  
        return null;
    }

    return (
        <div className='weatherContainer'>
            <button className='removeItemButton' onClick={(index) => removeLocation(index)}>X</button>
            <div className='weatherInformation'>
                <h3>{weather.name}</h3>
                <h4>Temperature is: {tempInCelsius.toFixed(0)}°C</h4>
                <h4>Conditions are: {conditions}</h4>
                <h5>Wind speed is: {windSpeed}m/s</h5>
            </div>
        </div>
    );
}

export default WeatherWidget;