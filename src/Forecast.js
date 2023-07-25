import react, {useEffect, useState} from 'react';

function Forecast( { coordinates }) {
    const [hours, setHours] = useState([]);

    useEffect(() => {
        console.log(`Forecast Mounted`);
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`).
        then(response => response.json()).
        then(data => {setHours(data); console.log(data)});
    }, []);


    return (
        <div>
            <h1>Forecast</h1>
            <ul>
                {hours.hourly ?
                // given the API we are calling will always return 48 hours of data, I only want to display 24 so while it is bad practice I just remove the other half
                hours.hourly.slice(0,5).map((hour) => (
                <li key={hour.dt}>
                    {hour.temp}
                </li>    
                ))
                : "loading..."}
            </ul>
        </div>
    )
}


export default Forecast;