
import {
    SET_DASHBOARD_AMOUNT, SET_DASHBOARD_TO, SHOW_ALL_TRANSACTIONS_RECEIVE, SHOW_ALL_TRANSACTIONS_RECEIVE_FAILURE,
    SHOW_ALL_TRANSACTIONS_RECEIVE_SUCCESS, SHOW_ALL_TRANSACTIONS_SEND, SHOW_ALL_TRANSACTIONS_SEND_FAILURE,
    SHOW_ALL_TRANSACTIONS_SEND_SUCCESS, SEND_MONEY, SEND_MONEY_FAILURE, SEND_MONEY_SUCCESS
} from '../constants/ActionTypes'
import axios from 'axios'
const ROOT_URL = 'http://localhost:5000';

export function setDashBoardAmount(amount){
    return {
        type : SET_DASHBOARD_AMOUNT,
        amount
    }
}

export function setDashBoardTo(to){
    return {
        type : SET_DASHBOARD_TO,
        to
    }
}

export function showAllTransactionsReceive(){
    const token = sessionStorage.getItem('jwtToken');
    const user = JSON.parse(sessionStorage.getItem('user'));

    const request = axios.get(`${ROOT_URL}/transaction/receive/${user.walletId}?token=${token}`);

    return {
        type : SHOW_ALL_TRANSACTIONS_RECEIVE,
        payload : request
    }
}

export function showAllTransactionsReceiveSuccess(response){

    return {
        type : SHOW_ALL_TRANSACTIONS_RECEIVE_SUCCESS,
        payload : response
    }
}

export function showAllTransactionsReceiveFailure(error){
    return {
        type : SHOW_ALL_TRANSACTIONS_RECEIVE_FAILURE,
        payload : error
    }
}

export function showAllTransactionsSend(){
    const token = sessionStorage.getItem('jwtToken');
    const user = JSON.parse(sessionStorage.getItem('user'));

    const request = axios.get(`${ROOT_URL}/transaction/send/${user.walletId}?token=${token}`);

    return {
        type : SHOW_ALL_TRANSACTIONS_SEND,
        payload : request
    }
}

export function showAllTransactionsSendSuccess(response){

    return {
        type : SHOW_ALL_TRANSACTIONS_SEND_SUCCESS,
        payload : response
    }
}

export function showAllTransactionsSendFailure(error){
    return {
        type : SHOW_ALL_TRANSACTIONS_SEND_FAILURE,
        payload : error
    }
}

export function sendMoney(transaction){
    const token = sessionStorage.getItem('jwtToken');
    const request = axios.post(`${ROOT_URL}/transaction?token=${token}`, transaction);
    return {
        type : SEND_MONEY,
        payload : request
    }
}

export function sendMoneySuccess(response){
    return {
        type : SEND_MONEY_SUCCESS,
        payload : response
    }
}

export function sendMoneyFailure(error){
    return {
        type : SEND_MONEY_FAILURE,
        payload : error
    }
}
