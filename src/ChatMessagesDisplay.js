import React from "react";
import ChatMessages from "./ChatMessages"; 
import ChatShowingNoMessages from "./ChatShowingNoMessages";
import ChatTenderUser from "./ChatTenderUser";

const ChatMessagesDisplay = ({sentMessages, timeNow, user}) => {
    
    if(user.message){// any user was clicked 
        return (
            <>
            <ChatTenderUser user={user}/>
            <ChatMessages sentMessages={sentMessages} timeNow={timeNow}/>
            </>
        )
    }else if
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