import React from 'react'
import { SearchBar } from '../../index';
import { Div } from './leftPanel.elements';
import { NewChat, MessageTab } from '../../index';
function LeftPanel(props) {
    return (
        <Div>
            <SearchBar />
            <NewChat {...props} />
            <MessageTab />
        </Div>
    )
}

export default LeftPanel;
