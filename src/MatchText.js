import React from "react";
import "./MatchText.css";
import { Redirect } from 'react-router-dom';


const MatchText = ({isMatch, handleNewUser}) => {

    if(isMatch){
        return (
            <div className ="noMatch">
            <h1> Sorry, they don't like you back. Better luck next time. </h1>
            <button  
                className="matchText-newUser"
                onClick={handleNewUser}> Keep searching </button>
            </div>
        )
    } else{
        return (
            <div className ="yesMatch">
            <h1> They like you back! </h1>
            <button> Send them a message </button>
            <button 
                className="matchText-newUser"
                onClick={handleNewUser}
            > Keep searching  </button>
            </div>
        )
    }  

}

export default MatchText; 