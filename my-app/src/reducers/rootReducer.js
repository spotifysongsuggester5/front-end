import { combineReducers } from 'redux';
import {authReducer} from './authReducer';
import {songReducer} from './songReducer';



export default combineReducers ({
    authReducer,
    songReducer
});