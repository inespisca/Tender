import React, { useState } from 'react';
import './Home.css';
import Description from './Description';
import MatchText from './MatchText';
import { isContainer } from 'postcss-selector-parser';
import { Container, Row, Col } from "react-bootstrap";

const Home = ({ randomUser, newUser, settings, onSelectUser, user}) => {

    const [isMatch, setIsMatch] = useState(false)
    const [isDecided, setIsDecided] = useState(false)

    const handleNewUser = () => {
        newUser();
        setIsDecided(false);
    }

    const handleMatch = () => {
        const random = Math.round(Math.random());
        setIsMatch(!!random);
        setIsDecided(true);
    }

    const handleClassName = () => {
        if (isDecided) {
            if (isMatch) {
                return "mainImage-transparent"
            } else {
                return "mainImage-bright"
            }
        } else {
            return "mainImage"
        }
    }


    return (
        <>
          <div className="homeCentered">
                <Container>
                
                    {
                        randomUser.name !== undefined &&
                    <Row>
                        <Col xs={12} md={12}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="arrow left">
                                    <i className= {isDecided ? "off-buttons" : "fas fa-chevron-left d-xl-none" } onClick={handleNewUser}></i>
                                    <p className={isDecided ? "off-buttons" :"left d-none d-xl-block"} onClick={handleNewUser}> <sub className="rose">&tilde;</sub> Bye, bye  <sub className="rose">&tilde;</sub></p>
                                </div>
                                    <img className={handleClassName()} onClick={() => onSelectUser(user, '/profile')} src={randomUser.picture.large} alt="Tender user" />  
                                <div className="arrow">    
                                    <i className={isDecided ? "off-buttons" : "fas fa-chevron-right d-xl-none" } onClick={handleMatch}></i> 
                                    <p className={isDecided ? "off-buttons" :"right d-none d-xl-block"} onClick={handleMatch}> <sub className="rose">&tilde;</sub> Marry me <sub className="rose">&tilde;</sub></p> 
                                </div>  
                            </div>                                
                        </Col>
                    </Row>
    }
                    <Row>
                        <Col xs={12} md={12}>
                            <div className={isDecided ? "off-buttons" :"text-center name"}>
                                <p> {user.name.first}, {user.dob.age} </p>
                            </div>
                        </Col>
                    </Row>
                            

                    
                </Container>
            </div>
            { isDecided &&
                <MatchText isMatch={isMatch} handleNewUser={handleNewUser} isDecided={isDecided}/>
            }
        </>
    )
}

// The settings props are passed from the parent component (App.js) with "const Home = ({ randomUser, newUser, chuckNorrisQuote, settings }) => {" and then they
// are passed to its child component through the part "settings={settings}" in "<Description chuckNorrisQuote={chuckNorrisQuote} settings={settings} />"

export default Home; 