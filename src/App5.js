import React from "react";

export default function App() { 
    const [formData, setName] = React.useState({
        firstName : "", 
        lastName : "", 
        email : "", 
        comment: "", 
        isFriendly: false , 
        employment : "", 
        favColor : "",
    });   
    // console.log(formData.favColor);
    function handleChange(event) {
        const {name , value, type, checked} = event.target 
        // console.log(checked);
        setName( data => { 
            return {
                ...data, 
                [name] : type==="checkbox" ? checked : value
            }
        })
    }  
    function handleSubmit(e) { 
        e.preventDefault();
        console.log(formData);
    }

    
    return (
        <div>
            <form >
                <input type="text" placeholder="First Name" name="firstName" value={formData.firstName}  onChange={handleChange} ></input>
                <input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange}></input>
                <input type="text" placeholder="email" name="email" value={formData.email} onChange={handleChange}></input> 
                <textarea  name="comment" value={formData.comment} onChange={handleChange}/> 
                <input name = "isFriendly" onChange = {handleChange} id="isFriendly" type="checkbox" checked = {formData.isFriendly}></input> 
                <label htmlFor="isFriendly">Are you Friendly</label> 
                <fieldset>
                    <legend>current employment status</legend>
                    <input 
                        type="radio" 
                        checked = {formData.employment === "unemployed"} 
                        onChange={handleChange } 
                        value="unemployed" 
                        name="employment"
                        id = "Unemployed">
                    </input> 
                    <label htmlFor="unemployed">Unemployed</label>
                    <br/>   
                    <input 
                        type="radio" 
                        checked = {formData.employment === "part-time"} 
                        onChange={handleChange } 
                        value="part-time" 
                        name="employment"  
                        id = "Part-time">
                    </input> 
                    <label htmlFor="unemployed">Part-time</label>
                    <br/>   
                    <input 
                        type="radio" 
                        checked = {formData.employment === "full-time" } 
                        onChange={handleChange } 
                        value="full-time" 
                        name="employment"  
                        id = "Full-time">
                    </input> 
                    <label htmlFor="unemployed">Full-time</label>
                </fieldset>  
                <label htmlFor="faCvolor">What is your favourite color</label>
                <select 
                    id = "favColor"
                    name = "favColor" 
                    onChange={handleChange} 
                    value = {formData.favColor}
                > 
                    <option value="--Choose--">--Choose--</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="blue">Blue</option>
                    <option value="black">Black</option>
                </select> 
                <br/> 
                <br/> 
                <button onClick={handleSubmit}>Submit</button>
                
                
                
            </form>   
        </div>
    )
}
