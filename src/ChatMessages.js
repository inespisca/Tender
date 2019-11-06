import React from "react"
import "./ChatMessages.css"

const ChatMessage = ({sentMessages, timeNow}) => {

return(
//still need to add time 

    <div>
        {sentMessages.map ( message => (
             <div className="chatMessages-newMessage">
                <p className="chatMessages-text"> {message} </p>
            </div>
        ))}
    </div>

)
}
export default ChatMessage; 