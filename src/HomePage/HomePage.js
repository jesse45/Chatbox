import React from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import classes from './HomePage.module.css';
import { useDispatch } from 'react-redux';
import { signoutUser } from '../store/actions/auth';

function HomePage() {
    const dispatch = useDispatch();
    let history = useHistory();

    const handleClick = () => {
        dispatch(signoutUser());
        history.push("/");

    }

    return (
        <>
            <nav>
                <div >
                    <img src={require('../assets/img/logo.png')} alt="Logo" />
                </div>
                <ul className={classes.Nav__links}>
                    <li><NavLink to="/">HomePage</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/signup">Sign Up</NavLink></li>
                </ul>

            </nav>


            <main>
                <h1>Welcome</h1>
                <button onClick={handleClick}>Sign Out</button>
            </main>
        </>
    )
}

export default HomePage;