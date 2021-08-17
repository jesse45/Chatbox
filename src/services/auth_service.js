
import axios from 'axios';
import ConnectyCube from 'connectycube/dist/connectycube.min.js';
import { CONFIG, CREDENTIALS } from '../appConfig';
import { signoutUser, signupUser } from '../store/actions/auth';
import { setCurrentUser } from '../store/actions/currentuser';
import User from '../models/user_model';
import store from '../store/store';


class AuthService {

    static APPLICATIONSESSION = 'APPLICATIONSESSION';
    static USERSESSION = 'USERSESSION';

    async init() {
        await ConnectyCube.init(CREDENTIALS, CONFIG);
        // this.CreateSession();
    }

    async isLoggedIn() {
        const checkUserLoggedIn = await this.getUserSession();

        if (checkUserLoggedIn) {
            const checkUserParsed = JSON.parse(checkUserLoggedIn);
            this.signIn({ login: checkUserParsed.login, password: checkUserParsed.password });

        }
    }

    async CreateSession() {
        const usercCredentials = { login: "dummyUser", password: "123456789" };
        await ConnectyCube.createSession()
            .then((session) => {
                console.log(session)
                this.setAppSession(session);
            })
            .catch((error) => { console.log(error) })

    }

    async signUp(userCredentials) {

        let userForm = new User(userCredentials);
        //encrypt the password


        // console.log(JSON.stringify(userParams))

        // return fetch("http://localhost:5000/api/signup", {
        //     method: 'POST',
        //     body: JSON.stringify(userForm),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // })
        //     .then(response => {
        //         if (!response.ok) {
        //             throw Error(`Error message: ${response.statusText}`)
        //         }
        //         console.log(response)
        //         return response.json()
        //     })
        //     .then(json => {
        //         console.log(json);
        //         sessionStorage.setItem('session_token', json.session_token)
        //         this.signIn({ login: userForm.login, password: userForm.password });
        //     })
        //     .catch(error => console.log(error))

        //await this.CreateSession();
        await ConnectyCube.users
            .signup(userForm)
            .then(async (user) => {
                console.log(user);
                await store.dispatch(signupUser({ email: userForm.email, password: userForm.password }));

                this.signIn({ email: userForm.email, password: userForm.password })

            })
            .catch((error) => { console.log(error) });


        // check for app token
        // TODO check if token has expired
        let appToken = sessionStorage.getItem("AppSession")
        let appTokenJson = JSON.parse(appToken);
        let token = appTokenJson.token;
        console.log(token)

    }

    async signIn(userCredentials) {

        //create a utlis file for making api request

        let token = sessionStorage.getItem('session_token');

        const userLogin = {
            login: userCredentials.login,
            password: userCredentials.password
        };


        await ConnectyCube.createSession(userLogin)
            .then(async (session) => {
                console.log(session);
                sessionStorage.setItem('session_token', session.token)
                await store.dispatch(setCurrentUser(session));
                this.connectToChat({ userId: session.user_id, password: userLogin.password });
            })


        // return fetch("http://localhost:5000/api/login", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(userLogin)
        // })
        //     .then(response => {
        //         if (!response.ok) {
        //             throw Error(`Error message: ${response.statusText}`)
        //         }
        //         console.log(response)
        //         return response.json()
        //     })
        //     .then(currentUser => {
        //         console.log(currentUser);
        //         sessionStorage.setItem('session_token', currentUser.session_token)
        //         store.dispatch(setCurrentUser(currentUser));
        //         this.connectToChat({ userId: currentUser.session.user_id, password: userLogin.password });
        //     })
        //     .catch(error => console.log(error))

    }

    // async signIn(userCredentials) {
    //     let token = sessionStorage.getItem("session_token");
    //     fetch("http://localhost:8080/auth/login", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'CB-Token': token
    //         },
    //         body: JSON.stringify({ login: userCredentials.login, password: userCredentials.password })
    //     })
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw Error(`Error message: ${response.statusText}`);
    //             }
    //             console.log(response);
    //             return response.json()
    //         })
    //         .then(currentUser => {
    //             console.log(currentUser);
    //             sessionStorage.setItem("session_token", currentUser.session.token);
    //             store.dispatch(setCurrentUser(currentUser))
    //             this.connectToChat({ userId: currentUser.user.id, password: 123456789 });

    //         })
    //         .catch(error => console.log(error))
    // }
    async isconnected() {
        const isConnected = ConnectyCube.chat.isConnected;
        return isConnected;
    }

    async disconnect() {
        ConnectyCube.chat.disconnect();
    }

    async connectToChat(userCredentials) {
        const user = {
            userId: userCredentials.userId,
            password: userCredentials.password
        }

        await ConnectyCube.chat
            .connect(user)
            .then((result) => {
                console.log(result)
                console.log(this.isconnected());
            })
            .catch((error) => { console.log(error) });


    }

    async logout() {
        await ConnectyCube.logout().catch((error) => { console.log(error) });
        //call firebase to log the user out.
        store.dispatch(signoutUser());
        sessionStorage.setItem(AuthService.USERSESSION, ' ');

    }

    setAppSession(session) {
        sessionStorage.setItem(AuthService.APPLICATIONSESSION, JSON.stringify(session))
    }

    setUserSession(user) {
        sessionStorage.setItem(AuthService.USERSESSION, JSON.stringify(user));
    }

    getUserSession() {
        return sessionStorage.getItem(AuthService.USERSESSION)
    }


}

const authservice = new AuthService();
Object.freeze(authservice);

export default authservice;