import React from "react"; 
import './styles/index3.css';  
import vaibhav from './vaibhav.jpg'
import Card from './components3/ContactCard'

   

const person = [
    {
        image : vaibhav,
        name  : 'Vaibhav Neekhra',
        phone : '8349206864' ,
        email : 'varnit200@gmail.com',
    },
    {
        image : vaibhav,
        name  : 'Vaibhav Neekhra',
        phone : '8349206864' ,
        email : 'varnit200@gmail.com',
    }


]


export default function App(){
  return( <div className="App">
            <Card ob = {person[0]}/>
            <Card ob = {person[1]}/>
          </div>
  )
} 