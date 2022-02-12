import React from "react"; 
// import memedata from '../memedata';

export default class Main extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                image: "https://i.imgflip.com/4acd7j.png",
                topText:"",
                bottomText:"",  
                allMemes : [], 

            }
        } 
        componentDidMount() {
            fetch("https://api.imgflip.com/get_memes") 
            .then(res=>res.json()) 
            .then(data=>this.setState({allMemes: data.data.memes}))
        }
        randomImage = (e)=> {
            e.preventDefault();
            let randomNumber = Math.floor(Math.random() * 100);
            let image = this.state.allMemes[randomNumber].url;
            this.setState({ image: image });
        }   
        handleChange = (event)=>{ 
            var a = event.target
            this.setState({[a.name] : a.value})
        }

        render () {
            return (
                <div className="main">
                    <div className="form">
                        <input 
                        name = "topText" 
                        type="text" 
                        className="input form-input-up" 
                        onChange={this.handleChange}>
                        </input>

                        <input 
                        name = "bottomText" 
                        type="text" 
                        className="input form-input-down" 
                        onChange={this.handleChange}>
                        </input>

                        <button 
                        onClick={this.randomImage} className="form-button">
                        Get a new Image
                        </button>

                    </div> 
                    <div className="meme">
                        <img 
                            className="main-image" 
                            src={this.state.image} 
                            alt="meme"
                        /> 
                        <h2 className="meme-text top">
                            {this.state.topText}
                        </h2>
                        <h2 className="meme-text bottom">
                            {this.state.bottomText}
                        </h2>
                        
                    </div>
                </div>
            );
        }
}