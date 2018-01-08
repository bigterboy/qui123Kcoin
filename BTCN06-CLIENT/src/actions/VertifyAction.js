import axios from 'axios'

import {
    SIGNUP_FAILURE,
    VERIFY_SET_MESSAGE,
    SET_VERIFY_CODE,
    SET_SIGNUP_EMAIL,
    SET_SIGNUP_PASSWORD,
    CHECK_VERIFY,
    VERIFY_IS_SUCCESS,
    ROOT_URL
}from '../constants/ActionTypes'



export function setSignUpEmail(email){
    return {
        type : SET_SIGNUP_EMAIL,
        email
    }
}

export function setSignUpVertify(verify){
    return {
        type : SET_VERIFY_CODE,
        verify
    }
}



export function setSignUpPassword(password){

    return {
        type : SET_SIGNUP_PASSWORD,
        password
    }
}

export function checkVerify(account) {

    console.log(account);

    const request = axios.post(`${ROOT_URL}/user/check-verify`, account);

    return {
        type : CHECK_VERIFY,
        payload : request
    }
}

export function setMessage(message, walletId){
    return {
        type : VERIFY_SET_MESSAGE,
        message,
        walletId
    }
}

export function verifySuccess(stateValue){
    return {
        type: VERIFY_IS_SUCCESS,
        stateValue
    }
}

export function signUpFailure(error){
    return {
        type : SIGNUP_FAILURE,
        payload : error
    }
}

