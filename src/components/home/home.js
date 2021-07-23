import React from 'react'
import Gradient from './home.elements';
import { AppConsole, AddNewChat, ChatScreen, MessageTab } from '../index';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

function Home(props) {

    return (

        <Gradient>
            <AppConsole {...props} />

        </Gradient>

    )
}

export default Home;
