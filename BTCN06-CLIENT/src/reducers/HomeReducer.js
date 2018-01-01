import {SHOW_ALL_TRANSACTIONS, SHOW_ALL_TRANSACTIONS_SUCCESS, SHOW_ALL_TRANSACTIONS_FAILURE} from '../constants/ActionTypes'



const initState = {
    transactions : []
}

export default function HomeReducer(state = initState, action){
    switch(action.type){
        case SHOW_ALL_TRANSACTIONS : return state;
        case SHOW_ALL_TRANSACTIONS_FAILURE : return state;
        case SHOW_ALL_TRANSACTIONS_SUCCESS : return {
            ...state,
            transactions : action.payload.data.transactions
        }
        default : return state;
    }
}

