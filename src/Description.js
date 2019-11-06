import React, { Component } from 'react';
import './Home.css';

class Description extends Component{
     constructor(props) {
         super(props);

         this.state = {
             showDescription: false,
             chuckNorrisQoute: ''
         }

         this.handleShowDescriptionOnClick = this.handleShowDescriptionOnClick.bind(
            this
          );

     }

     handleShowDescriptionOnClick () {
         
         fetch("https://api.chucknorris.io/jokes/random")
         .then(response => response.json())
         .then( data => {
             console.log(data.value);
             this.setState({
                 chuckNorrisQoute: data.value,
                })
            })
            this.setState({ showDescription: !this.state.showDescription });
     }




    render (){
        return(
         <div className="container">
                <button onClick={this.handleShowDescriptionOnClick} >
                 MORE INFO </button>
                {this.state.showDescription ? 
                <div className="moreInfo">
                        <h4>{this.state.chuckNorrisQoute}</h4>
                </div>: null}               
         </div>
        )
    }
}

export default Description;