import firebase from 'firebase';
import {Actions}from 'react-native-router-flux';

import {EMAIL_CHANGE, PASSWORD_CHANGE,LOGIN_USER_SUCCESS,LOGIN_USER_FAILED, LOGIN_USER} from './types';

export const EmailChange = (text) => {
    return {
        type: EMAIL_CHANGE,
        payload: text
    };
};

export const PasswordChange = (text) => {
    return{
        type: PASSWORD_CHANGE,
        payload: text
    };
};

export const LoginUser =  ({ email, password})=> {
    return(dispatch) =>{
        dispatch ({type: LOGIN_USER});

    firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user => LoginUserSuccess(dispatch, user))
            .catch (()=>{
                firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(user=>LoginUserSuccess(dispatch, user))
                .catch(()=> LoginUserFailed(dispatch));
            });
    };
};

const LoginUserFailed = (dispatch) => {
    dispatch({type: LOGIN_USER_FAILED});
};

const LoginUserSuccess = (dispatch, user) =>{
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    Actions.Main();
};