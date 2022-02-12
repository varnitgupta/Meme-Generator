import React from "react";

export default function App() { 
    const [formData , setFormData] = React.useState({
        email: "", 
        password : "", 
        confirmPassword : "",  
        joinedNewsletter : false, 

    }) 
    function handleChange(event) {
        var {name , value, type, checked} = event.target; 
        setFormData(data => { 
           return {
               ...data, 
               [name] : type==="checkbox"? checked : value
               
            }
        })
    } 
               
            
    function handleSubmit(e) { 
        e.preventDefault();
        if(formData.email) { 
            if(formData.password){ 
                if(formData.password===formData.confirmPassword){
                    console.log(formData);
                    console.log("Signed up successfully");  

                    if(formData.joinedNewsletter) {
                        console.log("thanks for joining our news letter");
                    }
                } 
                else {
                    console.log("password and confrim password doesnt match");
                }
            } 
            else {
                console.log("please enter password");
            }
        }
        else {
            console.log("please enter email");
        }

    }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name = "email" placeholder="Email"></input>
                <input type="text" onChange={handleChange} name = "password" placeholder="Password"></input> 
                <input type="text" onChange={handleChange} name = "confirmPassword" placeholder="Confirm password"></input> 
                <label htmlFor="joinedNewsletter">I want to join the Newsletter</label>   
                <input id = "joinedNewsletter" type="checkbox" onChange={handleChange} name = "joinedNewsletter"></input>
                <button>Sign up</button>
            </form>
        </div>

    )
}