import React from "react"; 
import './styles/index2.css';  
import Navbar from './components2/Navbar'
import Card from './components2/card' 
import data from './data'
// import card from "./components2/card";

 
export default function App(){  
  const cards = data.map(x=>{
    return (
      <Card  {...x} // spread object.. it places the object in boelow form i.e. spreads the object
             
          // image = {x.coverImage} 
          // rating = {x.stats.rating} 
          // reviewCount = {x.stats.reviewCount}
          // location = {x.location}
          // title = {x.title} 
          // price = {x.price} 
          // openSpots = {x.openSpots}
      />
    )
  })

  return( <div className="App">
             <Navbar/> 
             <div className="cards-container">
             {cards}
             </div>
          </div>
  )
}