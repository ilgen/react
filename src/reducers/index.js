import { combineReducers } from 'redux';
import messagesReducer from './messages';

export default combineReducers ({
    messsages: messagesReducer
});