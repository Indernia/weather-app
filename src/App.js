import './App.css';
import React from 'react';
import WeatherWidget from './WeatherWidget';

function App() {
  return (
    <div>
      <h1>Hello Weather</h1>
      <div className='cards'>
        <WeatherWidget city={"London"} country={"uk"}/>
        <WeatherWidget city={"New York"} country={"us"}/>
        <WeatherWidget city={"Paris"} country={"fr"}/>
        <WeatherWidget city={"Copenhagen"} country={"dk"}/>
      </div>
    </div>  
    );
}

export default App;
