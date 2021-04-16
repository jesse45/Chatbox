
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
        // await this.CreateSession();
        // await ConnectyCube.users
        //     .signup(userProfile)
        //     .then(async (user) => {
        //         console.log(user);
        //         await store.dispatch(signupUser({ email: userProfile.email, password: userProfile.password }));

        //         this.signIn({ email: userProfile.email, password: userProfile.password })

        //     })
        //     .catch((error) => { console.log(error) });


        //check for app token
        //TODO check if token has expired
        let appToken = sessionStorage.getItem("AppSession")
        let appTokenJson = JSON.parse(appToken);
        let token = appTokenJson.token;
        console.log(token)
        let userForm = new User(userCredentials);


        let userParams = {
            email: "john@mail.com",
            password: "ksasfk1",
            phoneNumber: '+11234567890',
            displayName: "john wick"
        }
        console.log(JSON.stringify(userParams))

        fetch("http://localhost:8080/auth/signup", {
            method: 'POST',
            body: JSON.stringify(userForm),
            headers: {
                'Content-Type': 'application/json',
                'CB-Token': token
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(`Error message: ${response.statusText}`)
                }
                console.log(response)
                return response.text()
            })
            .then(json => {
                console.log(json);

            })
            .catch(error => console.log(error))

    }

    async signIn(userCredentials) {



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