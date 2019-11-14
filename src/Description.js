import React, { Component } from 'react';
import './Home.css';


const Description = ({ chuckNorrisQuote, settings }) => {
    return(
        <div className="container">
            <div className="settings">
                <p>{settings.smoker? "Smoker" : "Non smoker"}</p>
                <p>{settings.vegetarian? "Vegetarian" : "Non-vegetarian"}</p>
                <p>{settings.single? "Single" : "Married"}</p>
                    <div className="moreInfo">
                        <h1>More Info</h1>
                            <h4>{chuckNorrisQuote}</h4>
                    </div>
            </div>            
        </div>
    )
}

// The div named Settings is where we write what appears when each setting appears as true or false. The props are passed from
// const Description = ({ chuckNorrisQuote, settings and then to {settings.[setting name] + ternary operator for the answers in each case.
// always remember to write first the sentence in case the settings' boolean is true and then the sentence in case the settings' boolean is false 

export default Description;