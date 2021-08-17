import { combineReducers } from 'redux';
import auth from './auth';
import login from './login';
import currentUser from './currentUser';
import contacts from './contacts';

const reducers = combineReducers({
    auth,
    currentUser,
    contacts
})



export default reducers;