import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Message.css';
import faker from 'faker';

const Message = ({ user, location }) => {
    const formatMessage = () => {
        const message = user.message ? user.message : faker.lorem.sentence();

        if (location.pathname === '/messages') {
            return `${message.substring(0, 140)}...`
        }
        else {
            return `${message.substring(0, 15)}...`
        }
    }
    
    return (

        <div className="message">
            <div className="message-pict">
                <Link to="/chat" className="link">
                    <img src={user.picture.thumbnail} alt="Tender user" className="avatar" />
                </Link>
            </div>
            <div className='message-name'>
                <Link to="/chat" className='message-name'>
                    {user.name.first} {user.name.last}
                </Link>
            </div>
            <div className="message-content">
                <Link to="/chat" key={user.name} className="link">
                    {formatMessage()}
                </Link>
            </div>
            <div className="message-date">
                {user.date ? user.date : "29 oct."}
            </div>
        </div>
    )
}

export default withRouter(Message);