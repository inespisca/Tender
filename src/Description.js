import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Profile.css';


const Description = ({ user, settings }) => {
    
    const changeName = () => {
        //ChangeTheName
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

// The div named Settings is where we write what appears when each setting appears as true or false. The props are passed from
// const Description = ({ chuckNorrisQuote, settings and then to {settings.[setting name] + ternary operator for the answers in each case.
// always remember to write first the sentence in case the settings' boolean is true and then the sentence in case the settings' boolean is false 

export default Description;