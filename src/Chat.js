import React, { Component } from 'react';
import './Chat.css';
import ChatMessages from "./ChatMessages";
import { Row } from "react-bootstrap";
import Messages from "./Messages";

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

        <div className="chat-area">
          <div className="chat-spaceForMessages">
            <div className="chat-spaceForMessagesScroll">
              <ChatMessages sentMessages={this.state.sentMessages} timeNow={this.state.timeNow} />
            </div>
            <form className="chat-chatForm">
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat; 