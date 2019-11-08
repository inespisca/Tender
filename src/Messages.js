
import Message from './Message';
import React, { Component } from 'react';

class Messages extends Component {
    render() {
        const { randomUsers } = this.props
        return (
            <div>
                {
                    randomUsers.map(user => {
                        return <Message user={user} key={user.name.first} />
                    })
                }
            </div>
        )
    }
}








export default Messages; 