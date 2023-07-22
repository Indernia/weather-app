import React, { useState } from "react";
import "./AddCity.css";



function AddCity({ addLocation }) {
    const [city, setcity] = useState("");
    const [country, setcountry ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addLocation(country, city);
        e.target.reset();
        setcity("");
        setcountry("");
    }


    return (
        <form onSubmit={handleSubmit} className="cityInput">
            <label>City</label>
            <input type="text" value={city} onChange={(e) => setcity(e.target.value)} placeholder="Please input the desired city" />
            <label>Country</label>
            <input type="text" value={country} onChange={(e) => setcountry(e.target.value)}  placeholder="please input just country code"/>
            <button type="submit" >Add Location</button>
        </form>
    )
}

export default AddCity; 