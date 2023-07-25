import React from "react";
import "./DailyForecast.css";

function getDayOfWeek(date) {
    // Note: Sunday is 0, Monday is 1, and so on.
    // Also note that we are using the UNIX timestamp in seconds as input.
    let day = new Date(date * 1000).getDay();
    switch (day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2: 
            return "Tuesday";
        case 3: 
            return "Wednesday";
        case 4: 
            return "Thursday";
        case 5: 
            return "Friday";
        case 6: 
            return "Saturday";
    }
}

function DailyForecast( { dailyData }) {

    return (
        <div className="dailyForecastContainer">
            <h1>Daily Forecast</h1>
            <div className="dailyForecastModules">
                <div className="dailyForecastModule" id="dailyGridHeader">
                    <span> Day </span>
                    <span> </span>
                    <span> High </span>
                    <span> Low </span>
                </div>
                {dailyData.map((day, index) => {
                    return(
                        <div className="dailyForecastModule"> 
                            <span> {getDayOfWeek(day.dt)} </span>
                            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}></img>
                            <span> {(day.temp.max - 273.15).toFixed(0)}°C </span>
                            <span> {(day.temp.min - 273.15).toFixed(0)}°C </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DailyForecast;