import React from "react"

const ChatMessage = ({sentMessages}) => (

    sentMessages.map ( message => (
             <>
             <p> </p>
            <h1> {message} </h1>
            </>
        )  
    )
    
); 
export default ChatMessage; 