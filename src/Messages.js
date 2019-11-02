import React from 'react';
import './Messages.css';
import './Home.css';
import { Link } from 'react-router-dom';


const Messages = ({ randomUsers }) => {
    return (
        <div className="container messagess">
            {
                randomUsers.map(user => {
                    return (
                        <div key={user.name.first} className="comment">
                            <a href="/" className="avatar">
                                <img src={user.picture.thumbnail} alt="Tender user" />
                            </a>
                            <div className="content">
                                <a href="/" className="author">
                                    {user.name.first} {user.name.last}
                                </a>
                                <div className="metadata">
                                    <span className="date">Today at 6:00PM</span>
                                </div>
                                <div key={user.name} className="text">{user.message ? user.message : "You are developper, that's cool. I'm studying at the Wild Code School."}</div>
                                <Link to="/chat">Chat</Link>
                            </div>
                        </div>

                    )
                })
            }
        </div>

    );
};

export default Messages; 