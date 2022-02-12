import React from "react"; 
import Info from "./components/Info";  
import About from "./components/About";   
import Interests from "./components/Interests";   


import './index.css';


export default function App(){
  return( <div className="App">
            <Info/>
            <About></About> 
            <Interests/>
          </div>
  )
}
