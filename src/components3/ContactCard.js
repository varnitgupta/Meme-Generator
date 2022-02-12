import React from "react"; 

export default function ContactCard({ob:props}) { 
    console.log(props);
    return (
        <div className="card">
            <img className="card-image" src={props.image}/> 
            <p className="card-name">{props.name}</p> 
            <div className="card-info">
            <p className="card-mobileNumber">{props.phone}</p>
            <p className="card-email">{props.email}</p> 
            </div>
        </div>
    )
}