import React from 'react';
import './Home.css';
import Description from './Description';

const Home = ({ randomUser, newUser, chuckNorrisQuote }) => {
    return (
        <>
            <div className="container">
                {
                    randomUser.name !== undefined &&
                    <div className="swipe-area">
                        <button onClick={newUser}>NOBODY LOVES YOU</button>
                        <div className="wrapper">
                            <img className="mainImage" src={randomUser.picture.large} alt="Tender user" />
                            <h1> {randomUser.name.first} {randomUser.name.last} </h1>
                            <h2> {randomUser.dob.age} years old </h2>
                        </div>
                        <button>MARRY ME</button>
                    </div>

                }
            </div>
            <Description chuckNorrisQuote={chuckNorrisQuote}/>
        </>
    )
}

export default Home; 