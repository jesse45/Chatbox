import React from 'react';
import HomePage from './HomePage/HomePage';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Login from './containers/Auth/login';
import SignUp from './containers/Auth/signup';
import Testing from '../src/Testing';
import { AuthProvider } from './containers/Auth/auth';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';
import AuthService from './services/auth_service';
import { Provider } from 'react-redux';
import store from './store/store';
import { CONFIG, CREDENTIALS } from './appConfig';

function App() {


  const initConnectyCube = async () => {
    // await AuthService.init();

    //check for session token
    let token = sessionStorage.getItem("Token");
    if (!token) {
      await init();
    }
    else {
      //
    }

  }


  const init = async () => {
    await ConnectyCube.init(CREDENTIALS, CONFIG);
    // this.CreateSession();
  }

  initConnectyCube();


  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <div className="App">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/testing" component={Testing} />
            </Switch>
          </div>
        </AuthProvider>
      </Provider>
    </BrowserRouter>


  );
}

export default App;
