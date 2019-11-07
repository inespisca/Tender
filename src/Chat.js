import React, { Component } from 'react';
import './Chat.css';
import Messages from "./Messages";
import ChatMessagesDisplay from "./ChatMessagesDisplay"

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userMessage: "",
      sentMessages: [],
      timeNow: "still not changed",
    };
  }

  showCurrentlyTyping = e => {
    this.setState({ userMessage: e.target.value });
  }

  sendMessageNow = e => {
    e.preventDefault();
    if (this.state.userMessage) {
      this.setState((state) => {
        return {
          ...state,
          sentMessages: [...state.sentMessages, state.userMessage],
          timeNow: new Date(),
          userMessage: "",
        }
      })
    }
  }

  render() {
    return (
      <div className="chat">

        <div className="chat-contacts">
          <Messages randomUsers={this.props.randomUsers} />
        </div>

        <div className="chat-spaceForMessages">
            <div className="chat-spaceForMessagesScroll">
<<<<<<< HEAD
              <ChatMessages sentMessages={this.state.sentMessages} timeNow={this.state.timeNow} />
=======
              <ChatMessagesDisplay sentMessages={this.state.sentMessages} timeNow={this.state.timeNow} />
>>>>>>> master
            </div>

            <form className="chat-chatForm">
<<<<<<< HEAD
              <input
                type="text"
                className="chat-textInput"
                // placeholder="Go ahead, send them a message. Don't be shy!" 
                value={this.state.userMessage}
                onChange={this.showCurrentlyTyping} />
              <input
                type="submit"
                className="chat-sendButton"
                value="Send"
                onClick={this.sendMessageNow} />
=======
              <input 
                type="text" 
                className="chat-textInput" 
                value={this.state.userMessage} 
                onChange={this.showCurrentlyTyping}/>
              <input 
                type="submit" 
                className="chat-sendButton" 
                value="Send" 
                onClick={this.sendMessageNow}/>
>>>>>>> master
            </form>
          </div>
      </div>
    );
  }
}

export default Chat; 