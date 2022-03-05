import react from "react";  
import Die from "./components10/Die";
import {ceil, random} from "mathjs";
import { nanoid } from "nanoid"; 
export default function App() {  
    const [dice, setDice] = react.useState(allNewDice())  
    const [tenzies, setTenzies] = react.useState(false) 
    react.useEffect(()=>{
        console.log("dice state changed");  
        let p = dice[0].value
       const allHeld = dice.every(die => die.isHeld); 
       const allValues = dice.every(die => die.value===p);  
       if(allHeld&&allValues){
           setTenzies(true)
       }

    },[dice])

    function generateNewDie() {
        return{
                value:ceil(random()*6), 
                isHeld: false, 
                id : nanoid()
            }
        
    }

    function allNewDice() { 
        const newDice = []
        for(let i=0;i<10;i++) { 
            newDice.push(generateNewDie())
        }  
        return newDice;
    }

    
    function rollDice() { 
        setDice((oldDice => oldDice.map(die=>{
            return die.isHeld?
                die:
               generateNewDie()

        }
        )))
    } 

    function holdDice(id, ){
        // console.log(id); 
        setDice(oldDice => oldDice.map( die=>{
                return die.id===id && !die.isHeld?
                    {...die, isHeld: !die.isHeld}: 
                    die
  
        }
        ))
    }
    const diceElements = dice.map((die)=>{ 
        return <Die 
        key = {die.id} 
        id = {die.id}
        value = {die.value} 
        isHeld = {die.isHeld} 
        holdDice = {()=>holdDice(die.id)}/>
    })   

    // const part1 = (<div>
        
    // </div> );
    
    // const part2 = (<div>
    //     <h1 className="title">You won</h1> 
    //     <button className="roll-btn" onClick={()=>setTenzies(false)}> playagain</button>
    
    // </div>)

    return (
        <main className="container"> 
        <h1 className="title">{tenzies?"You won":"Tenzies"}</h1>
        <p className="instructions">Roll untill all dice are same. Click each die to freeze it at its current value between rolls</p>
        <div className="die-container"> 
            { 
                diceElements
            }
            
        </div> 
        <button 
            className="roll-btn"
            onClick={rollDice}
        >
        {tenzies?"play Again" : "Roll"}
    </button>
        </main>
    )
}