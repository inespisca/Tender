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
                                        <Link to="/chat">
                                            <img src={user.picture.thumbnail} alt="Tender user" className="avatar" />
                                        </Link>
                                    </div>
                                    <div class="col-md-2">
                                        <Link to="/chat" className>
                                            {user.name.first} {user.name.last}
                                        </Link>
                                    </div>
                                    <div class="col-md-5  text-justify">
                                        <Link to="/chat" key={user.name} className="text">
                                            {user.message ? user.message : "Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed non risus. Suspendisse lectus torto"}
                                        </Link>
                                    </div>
                                    <div class="col-md-2" className="date"> {user.date ? user.date : "Today at 6:00PM"} </div>
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