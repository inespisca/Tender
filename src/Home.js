import React, { useState } from 'react';
import './Home.css';
import Description from './Description';
import MatchText from './MatchText';

const Home = ({ randomUser, newUser, chuckNorrisQuote }) => {

    const [isMatch, setIsMatch] = useState (false)
    const [isDecided, setIsDecided] = useState (false)

    const handleNewUser = () => {
        newUser();
        setIsDecided(false);
    }

    const handleMatch = () => {
        const random = Math.round(Math.random());
        setIsMatch(!!random);
        setIsDecided(true);
    }

    return (
        <>
            <div className="container">
                {
                    randomUser.name !== undefined &&
                    <div className="swipe-area">
                        <button className = {isDecided && "off-buttons"} onClick={handleNewUser}> NOBODY LOVES YOU</button>
                        <div className="wrapper">
                            <img className="mainImage" src={randomUser.picture.large} alt="Tender user" />
                            <h1> {randomUser.name.first} {randomUser.name.last} </h1>
                            <h2> {randomUser.dob.age} years old </h2>
                        </div>
                        <button className = {isDecided && "off-buttons"} onClick={handleMatch}> 
                            MARRY ME
                        </button>
                    </div>
                }
            </div>
            { isDecided ? 
                <MatchText isMatch={isMatch} handleNewUser={handleNewUser} isDecided={isDecided}/>
                : <Description chuckNorrisQuote={chuckNorrisQuote}/>
            }
        </>
    )
}

export default Home; 