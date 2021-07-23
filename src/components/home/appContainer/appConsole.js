import React from 'react'
import Console from './appConsoleElements';
import LeftPanel from '../leftPanel/leftPanel';
import RightPanel from '../rightPanel/rightPanel';
function AppConsole(props) {
    return (
        <Console className="appContainer" >
            <LeftPanel {...props} />
            <RightPanel {...props} />
        </Console>
    )
}

export default AppConsole;
