
import {
    SET_DASHBOARD_AMOUNT, SET_DASHBOARD_TO, SHOW_ALL_TRANSACTIONS_RECEIVE, SHOW_ALL_TRANSACTIONS_RECEIVE_FAILURE,
    SHOW_ALL_TRANSACTIONS_RECEIVE_SUCCESS, SHOW_ALL_TRANSACTIONS_SEND, SHOW_ALL_TRANSACTIONS_SEND_FAILURE,
    SHOW_ALL_TRANSACTIONS_SEND_SUCCESS, SEND_MONEY, SEND_MONEY_FAILURE, SEND_MONEY_SUCCESS
} from '../constants/ActionTypes'



const initState = {
    isLogout: false,
    to: '',
    amount: '',
    message: '',
    sTransactions: [],
    rTransactions: []
}

export default function DashBoardReducer(state = initState, action){
    switch(action.type){
        case SET_DASHBOARD_AMOUNT : return {
            ...state,
            amount : action.amount
        }
        case SET_DASHBOARD_TO : return {
            ...state,
            to : action.to
        }
        case SHOW_ALL_TRANSACTIONS_RECEIVE : return state;
        case SHOW_ALL_TRANSACTIONS_RECEIVE_FAILURE : return state
        case SHOW_ALL_TRANSACTIONS_RECEIVE_SUCCESS : return {
            ...state,
            rTransactions : action.payload.data.transactions
        }
        case SHOW_ALL_TRANSACTIONS_SEND : return state;
        case SHOW_ALL_TRANSACTIONS_SEND_FAILURE : return state;
        case SHOW_ALL_TRANSACTIONS_SEND_SUCCESS : return {
            ...state,
            sTransactions : action.payload.data.transactions,
            message : ''
        }
        case SEND_MONEY : return state;
        case SEND_MONEY_FAILURE : return {
            ...state,
            message : action.payload.data.message
        }
        case SEND_MONEY_SUCCESS : 
        sessionStorage.setItem('user', JSON.stringify(action.payload.data.user));
        return {
            ...state,
            message : 'BTC is sent successfully!',
            to : '',
            amount : ''
        }
        default : return state;
    }
}