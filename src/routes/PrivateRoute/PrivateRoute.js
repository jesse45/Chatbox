import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../containers/Auth/auth';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const currentUser = useContext(AuthContext);
    const auth = useSelector(state => state.auth)
    // console.log(RouteComponent)
    // console.log(rest)
    // console.log(currentUser)
    return (
        <Route
            {...rest}
            render={routeProps =>
                currentUser ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect exact to="/" />
                )
            }
        />
    );
};


export default PrivateRoute;