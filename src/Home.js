import React, { useState } from 'react';
import './Home.css';
import Description from './Description';
import MatchText from './MatchText';
import { isContainer } from 'postcss-selector-parser';

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

    const handleClassName = () => {
        if(isDecided){
            if(isMatch){
                return "mainImage-transparent"
            } else {
                return "mainImage-bright"
            }
        }else{
            return "mainImage"
        } 
    }

    return (
        <>
            <div className="container">
                {
                    randomUser.name !== undefined &&
                    <div className="swipe-area">
                        <button className = {isDecided && "off-buttons"} onClick={handleNewUser}> NOBODY LOVES YOU</button>
                        <div className="wrapper">
                            <img className={handleClassName()} src={randomUser.picture.large} alt="Tender user" />
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
                : <Description chuckNorrisQuote={chuckNorrisQuote} settings={this.state.settings} />
            }
        </>
    )
}

// settings is going through from App.js to Description.js by using "settings={this.state.settings}" in the Description path.

export default Home; 