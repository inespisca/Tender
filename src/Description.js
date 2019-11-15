import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";


const Description = ({ user, settings }) => {
    const changeName = () => {
        //ChangeTheName
        const valueChucknorris = user.description;
        let chuckNorrisName = 'Chuck Norris';
        let userName = user.name.first;
        if (valueChucknorris.includes(chuckNorrisName)) {
            const replace = valueChucknorris.replace(chuckNorrisName, userName);
            return replace
        }
        return user.description
    }

    return (
        <Container>
            <Row>
                <Col md={12} xs={12} className="text-left description">
                    {
                        (user.name.first !== "Angélina" && user.name.first !== "Inês" && user.name.first !== "Elena" && user.name.first !== "Alexandra") &&
                        <>
                            <p>{settings.smoker ? "Smoker" : "Non smoker"}</p>
                            <p>{settings.vegetarian ? "Vegetarian" : "Non vegetarian"}</p>
                            <p>{settings.single ? "Single" : "Married"}</p>
                        </>
                    }

                    <span>{user.name.first} {user.name.last}</span> - <span>{user.dob.age} years old</span>
                    <br /><span>Short description:</span> <h4>{changeName()}</h4>

                </Col>
            </Row>
        </Container>
    )
}

// The div named Settings is where we write what appears when each setting appears as true or false. The props are passed from
// const Description = ({ chuckNorrisQuote, settings and then to {settings.[setting name] + ternary operator for the answers in each case.
// always remember to write first the sentence in case the settings' boolean is true and then the sentence in case the settings' boolean is false 

export default Description;