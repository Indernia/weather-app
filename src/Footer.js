import React from "react";
import "./Footer.css";

function Footer() { 
    return (
        <div className="footerContainer">
            <h1>Footer</h1>
            <div className="footerItems">
                <span> <a href="#">About</a> </span>
                <span> <a href="#">Contact</a> </span>
                <span> <a href="#">Privacy Policy</a> </span>
            </div>
        </div>
    )
}

export default Footer;