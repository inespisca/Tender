import React, { Component } from 'react';
import './Home.css';

class Description extends Component{
     constructor(props) {
         super(props);

         this.state = {
             showDescription: false,
         }

        //  this.handleShowDescriptionOnClick = this.handleShowDescriptionOnClick.bind(
        //     this 
        //   );

     }

     componentDidUpdate(prevProps) {
         if(this.props.chuckNorrisQuote !== prevProps.chuckNorrisQuote){
             this.setState({showDescription: false});
         }

     }

     handleShowDescriptionOnClick = () => {

            this.setState({ showDescription: !this.state.showDescription });
     }




    render (){
        console.log(this.props.chuckNorrisQuote);
        return(
         <div className="container">
                <button onClick={this.handleShowDescriptionOnClick} >
                 MORE INFO </button>
                {this.state.showDescription ? 
                <div className="moreInfo">
                        <h4>{this.props.chuckNorrisQuote}</h4>
                </div>: null}               
         </div>
        )
    }
}

export default Description;