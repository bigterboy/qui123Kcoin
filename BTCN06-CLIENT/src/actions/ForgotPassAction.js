// import axios from 'axios'

import {
    FORGOT_PASS_SET_EMAIL
}from '../constants/ActionTypes'



export function setEmail(email){
    console.log(email);
    return {
        type : FORGOT_PASS_SET_EMAIL,
        email
    }
}
