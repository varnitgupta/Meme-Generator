import React from "react";  
import logo from '../logo.svg' 
import vaibhav from '../vaibhav.jpg' 


export default function Info() {
    return (
        <header>
            <img className="info--image" src={vaibhav} alt="profile"/> 
            <div className="Info-text">
            <h3 className="Info--name">Vaibhav Neekhra</h3> 
            <h5 className="Info--profile">Student</h5>  
            <p>
            <a className="website-link" href="www.google.com">website</a>
            </p> 
            </div>
            <div className="buttons">
                <button className="Info--email btn">Email</button>
                <button className="Info--linkedIn btn">LinkedIn</button>
            </div>
        </header>
    )
}