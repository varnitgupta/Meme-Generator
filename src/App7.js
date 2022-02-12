import React from "react";
export default function App() {
    const [data, setData] = React.useState({}) 
    const [count,  setCount] = React.useState(1)  

    // console.log("cio");

    React.useEffect(() =>{ 
        console.log("bio");
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json()) 
        .then(data => setData(data))
    },[count])  
    return(
        <div>
            <h2>the count is {count}</h2>
            <button onClick={()=>setCount(count+1)}>Get Next Character</button>
            <pre>{JSON.stringify(data,null,2)}</pre>  

        </div>
    )
}