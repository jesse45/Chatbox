import React, { } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signinUser } from '../../store/actions/auth';
// import { AuthContext } from './auth';
import AuthService from '../../services/auth_service';

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();

    // const currentUser = useContext(AuthContext);
    const { register, handleSubmit, errors } = useForm();

    const clickHandler = () => {
        dispatch(signinUser);
    }

    const handleOnSubmit = (data) => {

        console.log(data);

        AuthService.signIn({ login: data.login, password: data.password })
        // dispatch(signinUser(data));
        // history.push('/testing')

        // if (currentUser) {
        //     return <Redirect to='/testing' />
        // }
    }


    return (
        <section>
            <div style={{ backgroundColor: '#fff', top: 50, minHeight: '100vh' }}>
                <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <p>ChatBox</p>
                    <div>
                        <input
                            type='text'
                            name='login'
                            placeholder="Enter your login"
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