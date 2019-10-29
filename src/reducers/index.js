import { combineReducers } from 'redux';
import messagesReducer from './messages';
import usernameReducer from './username';
import reactionsReducer from './reactions';

export default combineReducers ({
    messsages: messagesReducer,
    username: usernameReducer,
    reactions: reactionsReducer
});