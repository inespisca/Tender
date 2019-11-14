import React, { Component } from 'react';
import './Home.css';


const Description = ({ user, settings }) => {
    console.log(settings)
    return (
        <div className="container">
            <div className="moreInfo">
                <h1>More Info</h1>
                <h4>{user.description}</h4>
                <p>{settings.smoker ? 'smoker' : 'non smoker'}</p>
            </div>
        </div>
    )
}

export default Description;