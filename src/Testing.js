import React from 'react'
import UserService from './services/user_service';
import { getIdToken } from './store/actions/auth';


export default function Testing() {

    const runToken = () => {
        getIdToken();
    }

    return (
        <div>
            <p>In the testing function</p>
            <button onClick={runToken}>Get User Id</button>
            <button
                onClick={() => {
                    UserService.deletUser();
                }}>
                Delete User from connectycube
                </button>
        </div>
    )
}

