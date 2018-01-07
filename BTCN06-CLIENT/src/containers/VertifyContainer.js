import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Vertify from '../components/Vertify'
import * as VertifyAction from '../actions/VertifyAction'

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
            case 'vertify' : this.props.actions.setSignUpVertify(value); break;
            case 'password' : this.props.actions.setSignUpPassword(value); break;
            case 'rePassword' : this.props.actions.setSignUpRePassword(value);break;
        }

    }

    handleClick() {
        const account = {
            email: this.props.todos.email,
            vertify: this.props.todos.vertify,
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
                <Vertify message={todos.message}
                        email={todos.email}
                         vertify={todos.vertify}   // cais nay dung de lam gi
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
            email: state.VertifyReducer.email,
            vertify: state.VertifyReducer.vertify,
            password: state.VertifyReducer.password,
            rePassword: state.VertifyReducer.rePassword,
            message: state.VertifyReducer.message,
            user: state.VertifyReducer.user
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(VertifyAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)