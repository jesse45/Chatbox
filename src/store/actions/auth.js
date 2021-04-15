import app from '../../base';
import UserService from '../../services/user_service';
// const UserService = require('../../services/user_service');

const SIGNUP_USER = 'SIGNUP_USER';
const SIGNOUT_USER = 'SIGNOUT_USER';
const SIGNIN_USER = 'SIGNIN_USER';
const GET_ID = 'GET_ID';

export const signUp = (data) => {
    return {
        type: SIGNUP_USER,
        payload: data
    }
}

export const signOut = () => {
    return {
        type: SIGNOUT_USER,

    }
}

export const signIn = (data) => {
    return {
        type: SIGNIN_USER,
        payload: data
    }
}

export const getID = () => {
    return {
        type: GET_ID
    }
}

export const signupUser = (userData) => {
    return async (dispatch) => {
        app.auth().createUserWithEmailAndPassword(userData.email, userData.password)
            .then(async function (data) {
                console.log(data);
                dispatch(signUp(data))

            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

                // console.log(errorMessage);
                // ...
                console.error(error)

                UserService.deletUser();

            })
    }
}

export const signoutUser = () => {
    return async (dispatch) => {
        app.auth().signOut().then(function () {
            // Sign-out successful.
            dispatch(signOut())
        }).catch(function (error) {
            // An error happened.
        });
    }
}

export const signinUser = (userData) => {
    return async (dispatch) => {
        app.auth().signInWithEmailAndPassword(userData.email, userData.password)
            .then(function (data) {
                console.log(data)
                dispatch(signIn(data))
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorMessage);
                // ...
            })
    }
}

export const checkUserState = () => {
    return async (dispatch) => {
        app.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                // ...
            } else {
                // User is signed out.
                // ...
            }
        })
    }
}

export const getIdToken = () => {

    app.auth().currentUser.getIdToken()
        .then((idToken) => {
            console.log(idToken);
        }).catch(() => {
            //handle error
        })

}

// dsada26