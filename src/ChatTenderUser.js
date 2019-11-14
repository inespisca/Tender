import React from "react"
import "./ChatMessages.css"
import { Container, Row, Col } from "react-bootstrap";


const ChatTenderUser = ({user}) => {

return(
    <Container>
        <Row className={"sentMessagesRow-TenderUsers"}>
        <Col  md={4} sm={5} xs={8} >
                    <div>
                        <div className="chatMessages-TenderUsers-newMessage">
                            <p> {user.message} </p>
                        </div>
                        <div className="chatMessages-TenderUsers-spaceBetweenMessages"></div>
                    </div>
            </Col>
        </Row>
    </Container>

)
}
export default ChatTenderUser; 