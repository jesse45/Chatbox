import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router';
import SignUp from './signup';
import Login from './login';
// import app from '../../base';

// export const AuthContext = createContext();


// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);
//     const [pending, setPending] = useState(true);

//     useEffect(() => {
//         app.auth().onAuthStateChanged((user) => {
//             if (user) {
//                 console.log(user)
//             }
//             setCurrentUser(user)
//             setPending(false)
//         });
//     }, []);

//     if (pending) {
//         return <>Loading...</>
//     }

//     return (
//         <AuthContext.Provider
//             value={{
//                 currentUser
//             }}
//         >
//             {children}
//         </AuthContext.Provider>
//     );
// };

//export const AuthProvider = ({ chlidren }) => {

//     const [currentUser, setCurrentUser] = useState(null);

//     useEffect(() => {
//         app.auth().onAuthStateChanged(setCurrentUser)
//         // return () => {
//         //     cleanup
//         // }
//     }, [])


//     return (
//         <AuthContext.Provider
//             value={{ currentUser }}
//         >
//             {children}

//         </AuthContext.Provider>
//     )
// }


function Auth() {

    let { path, url } = useRouteMatch();

    return (
        <>
            <Switch>
                <Route path={`${path}/signup`} component={SignUp} />
                <Route path={`${path}/login`} component={Login} />
            </Switch>


        </>
    )
}

export default Auth
