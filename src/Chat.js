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
    
    // currentDate = () => {
    //   let now = new Date(); 
    //   console.log('im here')
    //   return `${now.getHours()} : ${now.getMinutes()}`
        
    // }
    
  

  render () {
    return (
        <>
        <div>
            <ChatMessages sentMessages={this.state.sentMessages} /*currentDate={this.currentDate}*//> 
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

