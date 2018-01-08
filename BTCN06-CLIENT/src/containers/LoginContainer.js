import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as LoginAction from '../actions/LoginAction'
import Login from '../components/Login'


import {
    Redirect
} from 'react-router-dom'
class LoginContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            walletId: '',
            password: '',
            message: '',
            isLogin : false
        }

        this.handleDataInputChange = this.handleDataInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleDataInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        switch(name){
            case 'walletId' : this.props.actions.setLoginWalletId(value); return;
            case 'password' : this.props.actions.setLoginPassword(value); return;
            default : return;
        }
    }

    handleClick() {
        let account = {
            walletId: this.props.todos.walletId,
            password: this.props.todos.password
        }

        this.props.actions.login(account).payload
        .then((result)=>{
            console.log("result",result);
            if(result.data.status === 1){

                // Lưu tài khoản người dùng như express-session
                sessionStorage.setItem('jwtToken', result.data.token);
                sessionStorage.setItem('user',JSON.stringify(result.data.user));

                this.props.actions.loginSuccess(result);
            }
            else{
                this.props.actions.loginFailure(result);
            }
        }).catch((error)=>{
            console.log(error);
        })
        
    }   
    render() {
        const {todos} = this.props;
        if(sessionStorage.getItem('user')){
            return <Redirect to={{
                pathname: '/wallet'
            }} />
        }
        return (
            <div>
            
            <Login message={todos.message}
                walletId={todos.walletId} 
                password={todos.password} 
                onChange={this.handleDataInputChange}
                onClick={this.handleClick} />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        todos : {
            walletId : state.LoginReducer.walletId,
            password : state.LoginReducer.password,
            message : state.LoginReducer.message,
            isLogin : state.LoginReducer.isLogin,
        }
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators(LoginAction, dispatch)
    }
    
} 

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)