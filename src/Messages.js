import React from 'react';
import './Messages.css';
import './Home.css';
import { Link } from 'react-router-dom';


const Messages = ({ randomUsers }) => {
    return (
        <div className="containerMessagess">
            {
                randomUsers.map(user => {
                    return (
                        <div class="container">
                            <div key={user.name.first}>
                                <div class="row">
                                    <div class="col-md-1" >
                                        <a href="/chat">
                                            <img src={user.picture.thumbnail} alt="Tender user" className="avatar" />
                                        </a>
                                    </div>
                                    <div class="col-md-2">
                                        <a href="/chat" classNam>
                                            {user.name.first} {user.name.last}
                                        </a>
                                    </div>
                                    <div class="col-md-5  text-justify">
                                        <a href="/chat" key={user.name} className="text">
                                            {user.message ? user.message : "Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed non risus. Suspendisse lectus torto"}
                                        </a>
                                    </div>
                                    <div class="col-md-2" className="date"> Today at 6:00PM </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};





export default Messages; 