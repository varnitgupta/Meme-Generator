import React from "react";  
// import vaibhav from '../vaibhav.jpg'


export default function card(props) {  
    let badgeText; 
    if(props.openSpots===0) {
        badgeText = "SOLD OUT"
    } else if(props.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="card">  
        {badgeText && <p className="card-badge">{badgeText}</p>}
                <img src={`../images/${props.coverImage}`} className="card-image" ></img>    
            <div className="card-stats">
               <span>{props.stats.rating}</span> 
               <span className="gray" >({props.stats.reviewCount}) .</span> 
               <span className="gray">{props.location}</span> 
            </div> 
            <p className="card-description">{props.title}</p>
            <p className="card-price-info"><b>From $<span className="card-price">{props.price}</span></b>/person</p>

        </div>
    )
}

// {key : "" , item} {(key,item): props}
// 
// 