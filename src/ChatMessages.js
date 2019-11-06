import React from "react"
import "./ChatMessages.css"
import { Container, Row, Col } from "react-bootstrap";

const ChatMessage = ({sentMessages, timeNow}) => {

return(
//still need to add time 
    <Container>
        <Row>
        <Col  md={{ span: 4, offset: 8 }} sm={{ span: 5, offset: 7 }} xs={{ span: 8, offset: 4 }} >
                {sentMessages.map ( message => (
                    <div className="chatMessages-eachMessage">
                        <div className="chatMessages-newMessage">
                            <p> {message} </p>
                        </div>
                        <div className="chatMessages-spaceBetweenMessages"></div>
                    </div>
                ))}
            </Col>
        </Row>
    </Container>

)
}
export default ChatMessage; 