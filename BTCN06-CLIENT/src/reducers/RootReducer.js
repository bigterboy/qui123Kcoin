import {combineReducers} from 'redux'
import SignUpReducer from './SignUpReducer'
import HomeReducer from './HomeReducer'
import LoginReducer from './LoginReducer'
import DashBoardReducer from './DashBoardReducer'
import VertifyReducer from './VertifyReducer'

const RootReducer = combineReducers({
    SignUpReducer , HomeReducer, LoginReducer, DashBoardReducer, VertifyReducer
});

export default RootReducer