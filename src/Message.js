import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Message.css';

const Message = ({ user, location }) => {
    const formatMessage = () => {
        const message = user.message ? user.message : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit."

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