import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCZpMUiPgwx9E4SmXXUB-0nxPrjU-rkyo0",
    authDomain: "chatbox-e428d.firebaseapp.com",
    databaseURL: "https://chatbox-e428d.firebaseio.com",
    projectId: "chatbox-e428d",
    storageBucket: "chatbox-e428d.appspot.com",
    messagingSenderId: "485135160151",
    appId: "1:485135160151:web:fd8f7f766660d313dc2412"
};




const app = firebase.initializeApp(firebaseConfig);

export default app;


