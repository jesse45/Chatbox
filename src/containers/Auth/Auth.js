import React, { createContext, useState, useEffect } from 'react';
import app from '../../base';

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