import React from 'react'
import { SearchBar } from '../../index';
import { Div } from './leftPanel.elements';
import { NewChat } from '../../index';
function LeftPanel() {
    return (
        <Div>
            <SearchBar />
            <NewChat />
        </Div>
    )
}

export default LeftPanel;
