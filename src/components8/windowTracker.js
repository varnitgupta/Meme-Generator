import React from "react";

export default function WindowTracker() { 
    const [width, setWidth] = React.useState(window.innerWidth) 
    
    React.useEffect(()=> { 
        function watchWidth() {
            setWidth(width=>{
                return width = window.innerWidth;
            })
        }
        window.addEventListener("resize", watchWidth) 
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, []) 

    return (
        <h3 className="tracker-text">Window width: {width}</h3>
    )
}