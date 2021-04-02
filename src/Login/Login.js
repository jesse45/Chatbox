import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { signinUser } from '../store/actions/auth';
import { AuthContext } from '../containers/Auth/Auth';
// import classes from './Login.module.css';

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const currentUser = useContext(AuthContext);
    const { register, handleSubmit, errors } = useForm();

    const clickHandler = () => {
        dispatch(signinUser);
    }

    const handleOnSubmit = (data) => {

        console.log(data);
        dispatch(signinUser(data));
        history.push('/testing')

        if (currentUser) {
            return <Redirect to='/testing' />
        }
    }


    return (
        <section>
            <div style={{ backgroundColor: '#fff', top: 50, minHeight: '100vh' }}>
                <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <p>ChatBox</p>
                    <div>
                        <input
                            type='email'
                            name='email'
                            placeholder="Enter your email"
                            ref={register({ required: true })}
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            name='password'
                            placeholder="Enter your password"
                            ref={register({ required: true })}
                        />
                    </div>

                    <button type='submit'>Login</button>
                </form>

                <div>
                    <p>Already have an account?</p>
                    {/* <a href="#">Sign Up</a> */}
                </div>

            </div>
        </section>

    );
}

export default Login;