import React, {Component} from 'react'; 
import './Chat.css';
import ChatMessages from "./ChatMessages"; 

class Chat extends Component {
    constructor(props) {
      super(props);
  
      this.state = { 
        userMessage: "", 
        sentMessages: [],
        timeNow: "still not changed" , 
      };
    }

    showCurrentlyTyping = e => {
        this.setState({userMessage: e.target.value});
    } 
    
    sendMessageNow = e => {
        e.preventDefault();
        this.setState((state) => {
            return {
                ...state, 
                sentMessages: [...state.sentMessages, state.userMessage],
                timeNow : new Date(),
                userMessage: "",
            }
        } )
    }

  render () {
    return (
        <>
        <div className="chat-sentMessages">
            <ChatMessages sentMessages={this.state.sentMessages} timeNow={this.state.timeNow}/> 
        </div>
          <form className= "chat-chatForm">
              <input 
                type="text" 
                className="chat-textInput" 
                placeholder="Go ahead, send them a message. Don't be shy!" 
                value={this.state.userMessage} 
                onChange={this.showCurrentlyTyping}/>
              <input 
                type="submit" 
                className="chat-sendButton" 
                value="Send" 
                onClick={this.sendMessageNow}/>
          </form>
        </>

    );
  }
}

export default Chat; 