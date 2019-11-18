import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Profile.css';


const Description = ({ user, settings }) => {
    
    const changeName = () => {
        const valueChucknorris = user.description;
        let userName = user.name.first;
        if (valueChucknorris.match(/chuck norris/gi)) {
            return valueChucknorris.replace(/chuck norris/gi, userName);
        }
        return user.description
    }

    return (
        <Container>
            <Row>
                <Col md={12} xs={12} className="description">
                    <div className="profile-name">
                        <span>{user.name.first} {user.name.last}</span> - <span>{user.dob.age} years old</span>
                        <br /><h4 className="profile-quote">{changeName()}</h4>
                    </div>
                    {
                        (user.name.first !== "Angélina" && user.name.first !== "Inês" && user.name.first !== "Elena" && user.name.first !== "Alexandra") &&
                        <>
                            <p className="profile-settings">{settings.smoker ? "-Smoker-" : "-Non smoker-"}</p>
                            <p className="profile-settings">{settings.vegetarian ? "-Vegetarian-" : "-Non vegetarian-"}</p>
                            <p className="profile-settings">{settings.single ? "-Single-" : "-Married-"}</p>
                        </>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Description;