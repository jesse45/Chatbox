import React, { useEffect } from 'react';
import HomePage from './HomePage/HomePage';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Login from './Login/Login';
import SignUp from './containers/Auth/SignUp';
import Logout from './containers/Auth/Logout';
import Testing from '../src/Testing';
import { AuthProvider } from './containers/Auth/Auth';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AuthService from './services/auth_service';

function App() {


  useEffect(() => {
    const initConnectyCube = async () => {
      await AuthService.init();

    }

    initConnectyCube();

  }, [])

  return (
    <AuthProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/signout" component={Logout} />
          <PrivateRoute path="/testing" component={Testing} />
        </Switch>
      </div>
    </AuthProvider>

  );
}

export default App;
