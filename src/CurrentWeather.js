import React from "react";
import "./CurrentWeather.css";


function CurrentWeather( { currentData, dailyData } ) {

    const tempInCelsius = currentData.temp - 273.15;
    return (
        <div className="currentWeatherContainer">
            <h1>Your Location</h1>
            <span> {tempInCelsius.toFixed(0)}°C </span>
            <span> {currentData.weather[0].description} </span>   
            <span> High:{(dailyData[0].temp.max - 273.15).toFixed(0)}°C and Low:{(dailyData[0].temp.min - 273.15).toFixed(0)}°C</span>
        </div>
    )
}

export default CurrentWeather;