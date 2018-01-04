import {LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS,
SET_LOGIN_WALLETID, SET_LOGIN_PASSWORD} from '../constants/ActionTypes'
import axios from 'axios'


const ROOT_URL = 'http://localhost:5000'

export function setLoginWalletId(walletId) {
    return {
        type : SET_LOGIN_WALLETID,
        walletId
    }
}

export function setLoginPassword(password){
    return {
        type : SET_LOGIN_PASSWORD,
        password
    }
}

export function login(account){
    const request = axios.post(`${ROOT_URL}/user/login`, account);

    return {
        type : LOGIN,
        payload : request
    }
}

export function loginSuccess(response){

    
    return {
        type : LOGIN_SUCCESS,
        payload : response
    }
}

export function loginFailure(error){
    return {
        type : LOGIN_FAILURE,
        payload : error
    }
}