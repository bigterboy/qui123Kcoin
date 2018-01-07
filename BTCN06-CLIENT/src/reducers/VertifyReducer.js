import{
    CHECK_VERIFY,
    SET_VERIFY_CODE,
    VERIFY_SET_MESSAGE,
    VERIFY_IS_SUCCESS
} from '../constants/ActionTypes'


const initState = {
    verify : '',
    verify_is_success: false,
    verify_message: '',
    verify_walletId: ''
}

export default function VertifyReducer(state = initState, action){
    switch(action.type){
        case VERIFY_SET_MESSAGE : return {
            ...state,
            verify_message : action.message,
            verify_walletId: action.walletId

        }
        case VERIFY_IS_SUCCESS : return {
            ...state,
            verify_is_success: action.stateValue
        }
        case SET_VERIFY_CODE : return {
            ...state,
            verify : action.verify
        }
        case CHECK_VERIFY : return {
            ...state
        }
        default : return state;
    }
}