import React from "react";
import "./MatchText.css";
import { withRouter, useHistory } from "react-router-dom";

const MatchText = ({isMatch, handleNewUser}) => {

    let history = useHistory ()

    const handleRedirectToChat = () => {
        history.push("/chat");
        handleNewUser()
    }

    if(isMatch){
        return (
            <div className ="isMatch">
                <div className="noMatch">
                    <h1> Sorry, they don't like you back. <br/> Better luck next time. </h1>
                    <button  
                        className="matchText-newUser"
                        onClick={handleNewUser}
                    > Keep searching </button>
                </div>
            </div>
        )
    } else{
        return (
            <div className ="isMatch">
                <div className ="yesMatch">                    
                    <h1> They like you back </h1>
                    <img
                        className="matchText-tenderLogo" 
                        src="https://i.imgur.com/LN19krz.png" alt="Tender Logo">
                    </img>
                </div>
                <div className="matchText-yesBtns">
                    <button className="matchText-goToChatBtn" 
                        onClick={handleRedirectToChat}
                    > Send them a message </button>
                    <button 
                        className="matchText-newUser"
                        onClick={handleNewUser}
                    > Keep searching  </button>
                </div> 
            </div>
        )
    }  

}

export default withRouter (MatchText); 