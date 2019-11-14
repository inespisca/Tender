import React, { Component } from 'react';
import './Home.css';


const Description = ({ chuckNorrisQuote, settings }) => {
    console.log(settings)
    return(
        <div className="container">
               <div className="moreInfo">
                   <h1>More Info</h1>
                    <h4>{chuckNorrisQuote}</h4>
                    <p>{settings.smoker? 'smoker': 'non smoker'}</p>
               </div>            
        </div>
    )
}

export default Description;