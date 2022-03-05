import react from "react";
export default function die(props) {
    return (
        <div 
            onClick={props.holdDice}    
            className={props.isHeld? "die isHeld": "die"} 
        >
        <h2 className="die-num">
        {props.value}
        </h2>
        </div>
            
    )
}
        