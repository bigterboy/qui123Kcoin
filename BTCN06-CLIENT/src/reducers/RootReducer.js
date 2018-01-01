import {combineReducers} from 'redux'
import SignUpReducer from './SignUpReducer'
import HomeReducer from './HomeReducer'
import LoginReducer from './LoginReducer'
import DashBoardReducer from './DashBoardReducer'


const RootReducer = combineReducers({
    SignUpReducer , HomeReducer, LoginReducer, DashBoardReducer
});

export default RootReducer