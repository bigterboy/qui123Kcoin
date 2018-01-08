import {combineReducers} from 'redux'
import SignUpReducer from './SignUpReducer'
import HomeReducer from './HomeReducer'
import LoginReducer from './LoginReducer'
import DashBoardReducer from './DashBoardReducer'
import VertifyReducer from './VertifyReducer'
import ForgotPassReducer from './ForgotPassReducer'

// Khi thêm mới 1 reducer -> nhớ thêm vào chỗ này!
const RootReducer = combineReducers({
    SignUpReducer,
    HomeReducer,
    LoginReducer,
    DashBoardReducer,
    VertifyReducer,
    ForgotPassReducer
});

export default RootReducer