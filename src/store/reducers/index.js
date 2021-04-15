import { combineReducers } from 'redux';
import auth from './auth';
import login from './login';
import currentUser from './currentUser';

const reducers = combineReducers({
    auth,
    currentUser
})



export default reducers;