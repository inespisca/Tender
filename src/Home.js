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
            <Container fluid>
              
                {
                    randomUser.name !== undefined &&
                <Row>
                    <Col xs={12} md={12}>
                        <div className="d-flex justify-content-between align-items-center">
                            <i className= {isDecided ? "off-buttons" : "fas fa-chevron-left" } onClick={handleNewUser}></i>
                                <img className={handleClassName()} onClick={() => onSelectUser(user, '/profile')} src={randomUser.picture.large} alt="Tender user" />  
                                <i className={isDecided ? "off-buttons" : "fas fa-chevron-right" } onClick={handleMatch}></i>    
                        </div>
                                
                    </Col>
                </Row>
                }
            </Container>
            { isDecided ? 
                <MatchText isMatch={isMatch} handleNewUser={handleNewUser} isDecided={isDecided}/>
                : <Description user={randomUser} settings={settings} />
            }
        </>
    )
}

// The settings props are passed from the parent component (App.js) with "const Home = ({ randomUser, newUser, chuckNorrisQuote, settings }) => {" and then they
// are passed to its child component through the part "settings={settings}" in "<Description chuckNorrisQuote={chuckNorrisQuote} settings={settings} />"

export default Home; 