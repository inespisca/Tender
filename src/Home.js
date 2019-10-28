import React from 'react'; 
import './Home.css';

const Home = ({randomUser, newUser}) => {
    console.log("user banana" , randomUser.name)
    return (
        <div>
            {
                randomUser.name!==undefined && 
                <div>
                    <img src={randomUser.picture.large} alt="Tender user"/>
                    <h1> {randomUser.name.first} {randomUser.name.last} </h1>
                    <h2> {randomUser.dob.age} years old </h2>
                </div>
            }
         
            <button onClick ={newUser}> Nobody loves you</button>
         
            <button> Marry me </button>
            <button> More info </button> 
        </div>
    )
}

export default Home; 