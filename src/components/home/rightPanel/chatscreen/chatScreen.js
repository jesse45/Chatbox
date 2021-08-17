import React from 'react'
import chatService from '../../../../services/chat_service'
import userService from '../../../../services/user_service';

function ChatScreen() {

    const handleClick = () => {
        console.log(userService.getListOfUsers("Jesse Tron"));
    }

    return (
        <div>
            <button onClick={handleClick}>Dialogs</button>
            <p>in the chat screen</p>
        </div>
    )
}

export default ChatScreen
