
import
{SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS,SET_VERTIFY_EMAIL,
    SET_SIGNUP_EMAIL, SET_SIGNUP_REPASSWORD, SET_SIGNUP_PASSWORD} from '../constants/ActionTypes'


const initState = {
    email : '',
    vertify : '',
    password : '',
    rePassword : '',
    message : '',
    user : '',
    status : ''

}

export default function VertifyReducer(state = initState, action){
    switch(action.type){
        case SET_SIGNUP_EMAIL : return {
            ...state,
            email : action.email
        }
        case SET_VERTIFY_EMAIL : return {
            ...state,
            vertify : action.vertify
        }
        case SET_SIGNUP_PASSWORD : return {
            ...state,
            password : action.password
        }
        case SET_SIGNUP_REPASSWORD : return {
            ...state,
            rePassword : action.rePassword
        }
        case SIGNUP : return {
            ...state,
            user : null,
            status : 'signup'
        }
        case SIGNUP_SUCCESS : return {
            ...state,
            user : action.payload.data.user,
            password : '',
            rePassword : '',
            message : 'Sign Up Successfully',
            status : 'signup success'
        }
        case SIGNUP_FAILURE :
            return {
                ...state,
                user : null,
                message : action.payload.data.message,
                status : 'signup failure',
                password : '',
                rePassword : ''
            }
        default : return state;
    }
}