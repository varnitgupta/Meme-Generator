import React from "react";
import logo from '../airbnb-logo.png' 

export default function Navbar() {
    return (
        <nav className="nav">
            <img className="nav-logo" src={logo} alt="airbnb logo"></img>
        </nav>
    )
}