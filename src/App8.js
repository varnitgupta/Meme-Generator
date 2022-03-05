import React from "react"; 
import WindowTracker from "./components8/windowTracker";

export default function App() {  
    const [data , setData] = React.useState(true)   
    function toggleTracker() {
        setData(data=>{
            return data = !data
        })
    } 
    

    return(
        <div className="container"> 
            <button 
            onClick={toggleTracker}
            className="tracker-button">Toggle WindowTracker</button>
            {data && <WindowTracker/>}

        </div>
    )
}