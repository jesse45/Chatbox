import React from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import classes from './LandingPage.module.css';
import { useDispatch } from 'react-redux';
import { signoutUser } from '../../store/actions/auth';
import authservice from '../../services/auth_service';
import chatService from '../../services/chat_service';

function LandingPage() {
    const dispatch = useDispatch();
    let history = useHistory();

    const handleClick = () => {
        dispatch(signoutUser());
        history.push("/");

    }

    const onDisconnect = () => {
        authservice.disconnect();
    }

    return (
        <>
            <nav>
                <div >
                    <img src={require('../../assets/img/logo.png')} alt="Logo" />
                </div>
                <ul className={classes.Nav__links}>
                    <li><NavLink to="/">HomePage</NavLink></li>
                    <li><NavLink to="/auth/login">Login</NavLink></li>
                    <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
                    <li><NavLink to="/home">Home</NavLink></li>

                </ul>

            </nav>


            <main>
                <h1>Welcome</h1>
                <button onClick={handleClick}>Sign Out</button>
                <button onClick={onDisconnect}>Disconnect</button>

            </main>

        </>
    )
}

export default LandingPage;