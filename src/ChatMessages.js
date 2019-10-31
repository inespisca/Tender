import React from "react"
import "./ChatMessages.css"

const ChatMessage = ({sentMessages, currentDate}) => (


    sentMessages.map ( message => (
             <div className="chatMessages-newMessage">
             <p>{currentDate} </p>
            <h1 className="chatMessages-text"> {message} </h1>
            </div>
        )  
    )
    
); 
export default ChatMessage; 