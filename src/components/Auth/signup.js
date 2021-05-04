import React from 'react';
import { useForm } from 'react-hook-form';
import * as EmailValidator from 'email-validator';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signupUser } from '../../store/actions/auth';
import AuthService from '../../services/auth_service';
import classes from './SignUp.module.css';




function SignUp() {

    const history = useHistory();
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();


    const handleOnSubmit = (data) => {

        AuthService.signUp(data)
        // .then(() => {
        //     history.push("/testing")
        // })
        // .catch((error) => {
        //     console.log(error)
        // })

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
                                name="full_name"
                                placeholder="Fullname"
                                ref={register({ required: true })}
                            />
                        </div>
                        {/* <div>
                            <input
                                className={classes.InputElement}
                                type='text'
                                name="lastname"
                                placeholder="LastName"
                                ref={register({ required: false })}
                            />
                        </div> */}
                        <div>
                            <input
                                className={classes.InputElement}
                                type='text'
                                name="login"
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
                        <div>
                            <input
                                className={classes.InputElement}
                                type='text'
                                name="website"
                                placeholder="Website"
                                ref={register({ required: false })}
                            />
                        </div>
                        <div>
                            <input
                                className={classes.InputElement}
                                type='number'
                                name="phone"
                                placeholder="Phone Number"
                                ref={register({ required: false, minLength: 10 })}
                            />
                        </div>
                        <button type="submit">Sign up</button>
                    </form>

                </div>
                <div>
                    <p>{errors.email && "Your input needs an email"}</p>
                    <p>{errors.password && "Your input requried to be more than 6"}</p>
                    <p>{errors.phone_number && "Invalid Phone number"}</p>
                </div>
            </section>

        </div>
    )
}


export default SignUp;