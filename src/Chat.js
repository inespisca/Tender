import React, {Component} from 'react'; 
import './Chat.css';
import ChatMessages from "./ChatMessages"; 
import {Container, Row, Col} from "react-bootstrap"

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
        if(this.state.userMessage){
          this.setState((state) => {
              return {
                  ...state, 
                  sentMessages: [...state.sentMessages, state.userMessage],
                  timeNow : new Date(),
                  userMessage: "",
              }
            } )
        }
    }

  render () {
    return (
        <Container>
          <Row >
            <ChatMessages sentMessages={this.state.sentMessages} timeNow={this.state.timeNow}/> 
          </Row>
           <Row>
              <form 
                class="fixed-bottom" 
                className="chat-chatForm"
              >
                  <input 
                    type="text" 
                    className="chat-textInput" 
                    // placeholder="Go ahead, send them a message. Don't be shy!" 
                    value={this.state.userMessage} 
                    onChange={this.showCurrentlyTyping}/>
                  <input 
                    type="submit" 
                    className="chat-sendButton" 
                    value="Send" 
                    onClick={this.sendMessageNow}/>
              </form>
           </Row>
        </Container>

    );
  }
}

export default Chat; 