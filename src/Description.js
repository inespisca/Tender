import React, { Component } from 'react';
import './Home.css';

class Description extends Component{
     constructor(props) {
         super(props);

         this.state = {
            //  showDescription: false,
         }

        //  this.handleShowDescriptionOnClick = this.handleShowDescriptionOnClick.bind(
        //     this 
        //   );

     }

    //  componentDidUpdate(prevProps) {
    //      if(this.props.chuckNorrisQuote !== prevProps.chuckNorrisQuote){
    //          this.setState({showDescription: false});
    //      }

    //  }

    //  handleShowDescriptionOnClick = () => {

    //         this.setState({ showDescription: !this.state.showDescription });
    //  }

    render (){
        return(
         <div className="container">
                {/* <button onClick={this.handleShowDescriptionOnClick} >
                 MORE INFO </button> */}
                <div className="smoker">
                    { smoker ? "This person is a smoker" : "This person doesn't smoke" }
                </div>
                <div className="vegetarian">
                    { vegetarian ? "This person is vegetarian" : "This person isn't vegetarian" } 
                </div>
                <div className="single">
                    { single ? "This person is single" : "This person isn't single" }
                </div>
                <div className="moreInfo">
                    <h1>More Info</h1>
                        <h4>{this.props.chuckNorrisQuote}</h4>
                </div>            
         </div>
        )
    }
}

export default Description;