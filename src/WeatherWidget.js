import React, { useState, useEffect} from 'react';

function WeatherWidget( { city, country}) {
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

    const tempInCelsius = weather.main.temp - 273.15;
    let conditions = null;
    let windSpeed = null;
    let windDirection = null;
    try {
        windSpeed = weather.wind.speed;
        windDirection = weather.wind.deg;
    } catch (error) {
        console.log(error);
    }
    try {
        conditions = weather.weather[0].description;
    } catch (error) {
        console.log(error);
    }

    return (
        <div>
            <h3>Weather in {weather.name}</h3>
            <h4>Temperature is: {tempInCelsius.toFixed(2)}°C</h4>
            <h4>Conditions are: {conditions}</h4>
            <h5>Wind speed is: {windSpeed}m/s</h5>
        </div>
    );
}

export default WeatherWidget;