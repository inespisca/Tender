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
                <div className="moreInfo">
                    <h1>More Info</h1>
                        {this.settings.smoker}
                        <h4>{this.props.chuckNorrisQuote}</h4>
                </div>            
         </div>
        )
    }
}

export default Description;