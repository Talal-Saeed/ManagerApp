import {EMAIL_CHANGE,PASSWORD_CHANGE,LOGIN_USER_SUCCESS,LOGIN_USER_FAILED,LOGIN_USER} from '../Actions/types';

const INITIAL_STATE = { email: '',password: '', user: null, error: '', loading: false};

export default (state = INITIAL_STATE,action)=>{
   //consolelog
    switch (action.type){
        case EMAIL_CHANGE:
            return {...state , email: action.payload};
        case PASSWORD_CHANGE:
            return {...state, password: action.payload};
        case LOGIN_USER:
            return {...state, loading: true, error: ''};
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.payload, loading: false,  email: '',  password: ''};   
        case LOGIN_USER_FAILED:
            return {...state, error: 'Incorrect Email or Password', password: '', loading: false} 
        default:
        return state;
    }
}; 