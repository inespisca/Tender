import React, { Component } from 'react';
import './Home.css';
import { Container, Row, Col } from "react-bootstrap";

class Description extends Component{
     constructor(props) {
         super(props);

         this.state = {
            //  showDescription: false,
            settings: {
                smoker: ''
            }
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

    changeName = () => {
        //ChangeTheName
        const valueChucknorris = this.props.chuckNorrisQuote;
        let chuckNorrisName = 'Chuck Norris';
        let userName = this.props.randomUser.name.first;
        if(valueChucknorris.includes(chuckNorrisName)){
          const replace = valueChucknorris.replace(chuckNorrisName,userName);
          return replace
  
        }
    }


    render (){
        const { chuckNorrisQuote, randomUser} = this.props
        return(
         <Container>
             <Row>
                <Col md={12} xs={12} className="text-left description">

                    <span>Name: {randomUser.name.first} {randomUser.name.last}</span> ||  <span>Age: {randomUser.dob.age} years old</span>
                    <br/><span>Short description:</span> <h4>{this.changeName()}</h4>

                </Col>
            </Row>          
         </Container>
        )
    }
}

export default Description;