import React from "react"
import "./ChatMessages.css"
import { Container } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.css';

const ChatMessage = ({sentMessages, timeNow}) => {

return(
//still need to add time 
    <Container>
        <div>
            {sentMessages.map ( message => (
                <div className="chatMessages-newMessage">
                    <p className="chatMessages-text"> {message} </p>
                </div>
            ))}
        </div>
    </Container>

)
}
export default ChatMessage; 