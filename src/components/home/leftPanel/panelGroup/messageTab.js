import React, { useState } from 'react'
import { List, ListItems, Div } from './messageTab.elements';
import ChatService from '../../../../services/chat_service';
import Tabs from './tabs/tabs';
function MessageTab() {
    return (

        <Tabs>
            <div label="Recent">
                Recent component
            </div>
            <div label="Unread">
                Unread component
            </div>
            <div label="Groups">
                Groups component
            </div>
        </Tabs>

    )
}



export default MessageTab;
