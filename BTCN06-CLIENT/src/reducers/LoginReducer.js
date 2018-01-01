import {LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS,
SET_LOGIN_PASSWORD, SET_LOGIN_WALLETID} from '../constants/ActionTypes'


const initState = {
    walletId : '',
    password : '',
    message : '',
    isLogin : false
}

export default function LoginReducer(state = initState, action){
    switch(action.type){
        case SET_LOGIN_WALLETID : return {
            ...state,
            walletId : action.walletId
        }
        case SET_LOGIN_PASSWORD : return {
            ...state,
            password : action.password
        }
        case LOGIN : return state;
        case LOGIN_SUCCESS : return {
            ...state,
            isLogin : true,
            password : ''
        }
        case LOGIN_FAILURE : 
        return {
            ...state,
            message : action.payload.data.message,
            password : ''
        } 
        default : return state;
    }
}