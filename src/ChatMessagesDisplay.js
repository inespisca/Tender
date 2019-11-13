import React from "react";
import ChatMessages from "./ChatMessages"; 
import ChatShowingNoMessages from "./ChatShowingNoMessages";
const ChatMessagesDisplay = ({sentMessages, timeNow, randomUsers}) => {
    
    if
    //(randomUsers.message){
    //    return <ChatMessages-TenderUsers randomUsers={randomUsers}/>
    //}else if
    (sentMessages[0]){
        return <ChatMessages sentMessages={sentMessages} timeNow={timeNow}/> 
    }else{
        return <ChatShowingNoMessages/>
    }
}

export default ChatMessagesDisplay; 

//Component for opting between display sent messages or message of encouragement

//for if condition: an empty array is always TRUE, so if array index 0 does not exist array will be false,
// therefore }else{ return <ChatShowingNoMessages/> will be displayed. 
//This array is the state that holds sent messages and is initialized as an empty array.