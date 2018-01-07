import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignUp from '../components/SignUp'
import * as SignUpAction from '../actions/SignUpAction'

class SignUpContainer extends React.Component {

    constructor(props) {
        super(props);

        /*this.state = {
            email: '',
            password: '',
            rePassword: '',
            message: '',
            user: ''
        }*/

        this.handleDataInputChange = this.handleDataInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleDataInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        switch(name){
            case 'email' : this.props.actions.setSignUpEmail(value); break;
            case 'password' : this.props.actions.setSignUpPassword(value); break;
            case 'rePassword' : this.props.actions.setSignUpRePassword(value);break;
        }
        
    }

    handleClick() {
        const account = {
            email: this.props.todos.email,
            password: this.props.todos.password,
            rePassword: this.props.todos.rePassword
        }

        this.props.actions.signUp(account).payload
            .then((result) => {
                if (result.data.status === 1) {
                    this.props.actions.signUpSuccess(result);
                }
                else {
                    this.props.actions.signUpFailure(result)
                }
            }).catch((error) => {
                console.log(error);
            });

    }

    render() {
        const {todos, actions} = this.props;
        return (
            <div>
                <SignUp message={todos.message}
                    email={todos.email}
                    password={todos.password}
                    user={todos.user}
                    rePassword={todos.rePassword}
                    onChange={this.handleDataInputChange}
                    onClick={this.handleClick} />
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        todos: {
        email: state.SignUpReducer.email,
        password: state.SignUpReducer.password,
        rePassword: state.SignUpReducer.rePassword,
        message: state.SignUpReducer.message,
        user: state.SignUpReducer.user
    }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(SignUpAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)