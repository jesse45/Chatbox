import app from '../../base';

const SIGNUP_USER = 'SIGNUP_USER';
const SIGNOUT_USER = 'SIGNOUT_USER';
const SIGNIN_USER = 'SIGNIN_USER';

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

                console.log(errorMessage);
                // ...
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

// dsada26