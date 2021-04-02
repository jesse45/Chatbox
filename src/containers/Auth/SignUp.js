import React from 'react';
import { useForm } from 'react-hook-form';
import * as EmailValidator from 'email-validator';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signupUser } from '../../store/actions/auth';
import classes from './SignUp.module.css';



function SignUp() {

    const history = useHistory();
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();

    const handleOnSubmit = (data) => {

        console.log(data);
        dispatch(signupUser(data));
        history.push("/testing")

    }

    return (
        <div className={classes.Auth}>
            <h1>Welcome</h1>
            <section className={classes.SignUp}>
                <div className={classes.Section__Container}>
                    <form onSubmit={handleSubmit(handleOnSubmit)}>
                        <div>
                            <input
                                className={classes.InputElement}
                                type='text'
                                name="firstname"
                                placeholder="FirstName"
                                ref={register({ required: true })}
                            />
                        </div>
                        <div>
                            <input
                                className={classes.InputElement}
                                type='text'
                                name="lastname"
                                placeholder="LastName"
                                ref={register({ required: true })}
                            />
                        </div>
                        <div>
                            <input
                                className={classes.InputElement}
                                type='text'
                                name="username"
                                placeholder="Username"
                                ref={register({ required: true })}
                            />
                        </div>
                        <div>
                            <input
                                className={classes.InputElement}
                                type='text'
                                name="email"
                                placeholder="Email"
                                ref={register(
                                    {
                                        required: true,
                                        validate: value => console.log(value)
                                    }

                                )}
                            />
                        </div>
                        <div>
                            <input
                                className={classes.InputElement}
                                type='text'
                                name="password"
                                placeholder="Password"
                                ref={register({ required: true, minLength: 6 })}
                            />
                        </div>
                        <button type="submit">Sign up</button>
                    </form>

                </div>
                <div>
                    <p>{errors.email && "Your input needs an email"}</p>
                    <p>{errors.password && "Your input requried to be more than 6"}</p>
                </div>
            </section>

        </div>
    )
}


export default SignUp;