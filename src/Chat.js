import React, {Component} from 'react'; 
import './Chat.css';
import ChatMessages from "./ChatMessages"; 

class Chat extends Component {
    constructor(props) {
      super(props);
  
      this.state = { 
        userMessage: "", 
        sentMessages: [],
      };
    }

    // const printNewMessage = () => {
    //     // sent time

    //     //sent message
    //     return <p> Your message will apppear here:  {sentMessages} </p>

    // }

    showCurrentlyTyping = e => {
        this.setState({userMessage: e.target.value});
    } 
  
    sendMessageNow = e => {
        e.preventDefault();
        this.setState((state) => {
            return {
                ...state, 
                sentMessages: [...state.sentMessages, state.userMessage],
                userMessage: "",
            }
        })
    }
    
    
  

  render () {
    return (
        <>
        <div>
            <ChatMessages sentMessages={this.state.sentMessages}/> 
        </div>
        <form className= "chat-chatForm">
            <input type="text" className="chat-textInput" value={this.state.userMessage} onChange={this.showCurrentlyTyping}/>
            <input type="submit" className="chat-sendButton" value="Send" onClick={this.sendMessageNow}/>
        </form>
        </>

    );
  }
}

export default Chat; 

