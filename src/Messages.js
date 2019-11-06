
import './Messages.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Component } from 'react';

class Messages extends Component {
    render() {
        const { randomUsers } = this.props
        return (
            <div>
                {
                    randomUsers.map(user => {
                        return (
                            <Container>
                                <div key={user.name.first}>
                                    <Row>
                                        <Col lg={1} md={6} >
                                            <Link to="/chat" className="link">
                                                <img src={user.picture.thumbnail} alt="Tender user" className="avatar" />
                                            </Link>
                                        </Col>
                                        <Col lg={2} md={2}>
                                            <Link to="/chat" className="link">
                                                {user.name.first} {user.name.last}
                                            </Link>
                                        </Col>
                                        <Col lg={8} md={5} className="text">
                                            <Link to="/chat" key={user.name} className="text" className="link">
                                                {user.message ? user.message : "In my local directory a file was created titled .sofia/ and there is a file in there called phoneNum.txt which is corrupted. I use that file to execute a program called date.py. Do you know how to correct that file? "}
                                            </Link>
                                        </Col>
                                        <Col lg={1} md={2} className="date"> {user.date ? user.date : "29 oct."}
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        )
                    })
                }
            </div>
        )
    }
}








export default Messages; 