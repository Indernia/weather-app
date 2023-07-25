import React from "react";
import "./HourlyForecast.css";


function HourlyForecast( { hourlyData } ) {
    return (
        <div className="hourlyForecastContainer">
            <h1>Hourly Forecast</h1>
            <div className="hourlyModules">
                {hourlyData.slice(0,5).map((hour, index) => {
                    return(
                    <div key={index} className="hourlyModule">
                        <span> {new Date(hour.dt * 1000).getHours()} </span>
                        <img src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}></img>
                        <span> {(hour.temp - 273.15).toFixed(0)}°C </span>
                    </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default HourlyForecast;