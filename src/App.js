import React, { useState } from 'react';
import HomePage from './HomePage/HomePage';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import './App.css';
import Login from './containers/Auth/login';
import SignUp from './containers/Auth/signup';
import Auth from './containers/Auth/auth';
import Testing from '../src/Testing';
// import { AuthProvider } from './containers/Auth/auth';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';
import AuthService from './services/auth_service';
import { Provider } from 'react-redux';
import store from './store/store';
import { CONFIG, CREDENTIALS } from './appConfig';
import axios from 'axios';
import ConnectyCube from 'connectycube/dist/connectycube.min.js';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const initConnectyCube = async () => {
    // await AuthService.init();

    await init();
    //check for session token
    let token = sessionStorage.getItem("AppSession");
    //Todo: check if app token has expired
    console.log(token)
    if (token) {

      return <Redirect to="/testing" />

    }
    else {
      //
      await createSessionToken();
    }

  }


  const init = async () => {
    await ConnectyCube.init(CREDENTIALS, CONFIG);

    // console.log(Date.now())
    // console.log(Number.MAX_SAFE_INTEGER)
    // let max = 9999999999;
    // let min = 1000000000;
    // let randomNonce = Math.floor(Math.random() * (max - min) + min);
    // console.log(randomNonce)
    // this.CreateSession();
  }

  const createSessionToken = async () => {
    axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      url: "http://localhost:8080/createSession/session"
    })
      .then(data => {
        //status not == 200 handle that error
        let stringData = JSON.stringify(data.data.session);
        console.log(data)
        sessionStorage.setItem("AppSession", stringData)
      })
      .catch(error => console.log(error))
  }

  initConnectyCube();


  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/auth" component={Auth} />
            <PrivateRoute path="/testing" component={Testing} />

          </Switch>
        </div>
      </BrowserRouter>
    </Provider>


  );
}

export default App;
