import{
    FORGOT_PASS_SET_EMAIL
} from '../constants/ActionTypes'


const initState = {
    email: '',
    forgot_verify: '',
    forgot_newPassword: '',
    isChangePassSuccess: false
}

export default function VertifyReducer(state = initState, action){
    switch(action.type){
        case FORGOT_PASS_SET_EMAIL : return {
            ...state,
            email: action.email
        }
        default : return state;
    }
}