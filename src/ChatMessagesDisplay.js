import React from "react";
import ChatMessages from "./ChatMessages"; 
import ChatShowingNoMessages from "./ChatShowingNoMessages";

const ChatMessagesDisplay = ({sentMessages, timeNow}) => {
    console.log(sentMessages); 
    if(sentMessages[0]){
        return <ChatMessages sentMessages={sentMessages} timeNow={timeNow}/> 
    }else{
        return <ChatShowingNoMessages/>
    }
}

export default ChatMessagesDisplay; 