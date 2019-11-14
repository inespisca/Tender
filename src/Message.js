import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Message.css';
import faker from 'faker';

const Message = ({ user, location, onSelectUser }) => {
    const formatMessage = () => {
        const message = user.message ? user.message : faker.lorem.sentences();

        if (location.pathname === '/messages') {
            return `${message.substring(0, 130)}...`
        }
        else {
            return `${message.substring(0, 15)}...`
        }
    }

    return (

        <div className="message">
            <div className="message-pict" onClick={() => onSelectUser(user, '/profile')}>
                <img src={user.picture.thumbnail} alt="Tender user" className="avatar" />
            </div>
            <div className='message-name'>
                {user.name.first} {user.name.last}
            </div>
            <div className="message-content" onClick={() => onSelectUser(user, '/chatTenderUser')}>
                    {formatMessage()}
            </div>
            <div className="message-date">
                {user.date ? user.date : "29 oct."}
            </div>
        </div>
    )
}

export default withRouter(Message);