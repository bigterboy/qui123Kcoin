import axios from 'axios'

import {
    SHOW_ALL_TRANSACTIONS,
    SHOW_ALL_TRANSACTIONS_FAILURE,
    SHOW_ALL_TRANSACTIONS_SUCCESS,
    ROOT_URL
} from '../constants/ActionTypes'

export  function showAllTransactions(){
    const request = axios.get(`${ROOT_URL}/user/transaction`);
    console.log("request", request);
    return {
        type : SHOW_ALL_TRANSACTIONS,
        payload : request
    }
}

export  function showAllTransactionsSuccess(response){
    return {
        type : SHOW_ALL_TRANSACTIONS_SUCCESS,
        payload : response
    }
}

export  function showAllTransactionsFailure(error){
    return {
        type : SHOW_ALL_TRANSACTIONS_FAILURE,
        payload : error
    }
}