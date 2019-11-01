import { combineReducers } from 'redux';
import messagesReducer from './messages';
import usernameReducer from './username';

export default combineReducers({
    messages: messagesReducer, 
    username: usernameReducer
});