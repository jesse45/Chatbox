import React, { useState } from 'react'
import { List, ListItems, Div } from './messageTab.elements';
import ChatService from '../../../../services/chat_service';
import { Recent } from '../../../index'
import Tabs from './tabs/tabs';
function MessageTab() {
    return (

        <Tabs>
            <div label="Recent">
                <Recent />
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
