import React, { useState } from 'react'
import { Div } from './rightPanel.element';
import { AddNewChat, ChatScreen } from '../../index';
import { Route, useLocation, Router, Switch, Redirect, BrowserRouter } from 'react-router-dom';

function HomeScreen() {
    return (
        <div>
            <p>Home screen</p>
        </div>
    )
}

// function TestingScreen(props) {
//     const router = props.router;


//     return (
//         <div>
//             <p>Testing Screen</p>
//         </div>
//     )
// }

function RightPanel(props) {


    const { location } = props;
    console.log(location.pathname)
    // console.log(window)

    return (

        <Div>
            <Switch>
                <Route exact path={`/home`} component={ChatScreen} />
                <Route path={`/home/addNewChat`} component={AddNewChat} />
            </Switch>

            <p>Just checking</p>
        </Div>

    )
}

export default RightPanel
