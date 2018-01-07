import axios from 'axios'

import {SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS,SET_VERTIFY_EMAIL,
    SET_SIGNUP_EMAIL, SET_SIGNUP_REPASSWORD, SET_SIGNUP_PASSWORD
}
    from '../constants/ActionTypes'

const ROOT_URL = 'http://localhost:5000'



export function setSignUpEmail(email){
    return {
        type : SET_SIGNUP_EMAIL,
        email
    }
}

export function setSignUpVertify(vertify){
    return {
        type : SET_VERTIFY_EMAIL,
        vertify
    }
}



export function setSignUpPassword(password){

    return {
        type : SET_SIGNUP_PASSWORD,
        password
    }
}

export function setSignUpRePassword(rePassword){
    return {
        type : SET_SIGNUP_REPASSWORD,
        rePassword
    }
}

export function signUp(account) {

    const request = axios.post(`${ROOT_URL}/user/sign-up2`, account);

    return {
        type : SIGNUP,
        payload : request
    }
}

export function signUpSuccess(response){
    return {
        type : SIGNUP_SUCCESS,
        payload : response
    }
}

export function signUpFailure(error){
    return {
        type : SIGNUP_FAILURE,
        payload : error
    }
}

