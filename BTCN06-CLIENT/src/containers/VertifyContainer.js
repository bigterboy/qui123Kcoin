import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Vertify from '../components/Vertify'
import * as VerifyAction from '../actions/VertifyAction'

class SignUpContainer extends React.Component {

    constructor(props) {
        super(props);
        this.handleDataInputChange = this.handleDataInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleDataInputChange(e) {
        const value = e.target.value;
        this.props.actions.setSignUpVertify(value);
    }

    handleClick() {
        const account = {
            verify: this.props.todos.verify
        }

        this.props.actions.checkVerify(account).payload
            .then((result) => {
                if (result.data.status === 1) {
                    console.log('verify thanh cong. Chao: ' + result.data.email);
                    this.props.actions.setMessage('Verification is valid!', result.data.walletId)
                    this.props.actions.verifySuccess(true);
                }
                else {
                    console.log('verify that bai. Loi: '+ result.data.message);
                    this.props.actions.setMessage('Verification not valid!', '');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const {todos} = this.props;
        return (
            <div>
                <Vertify verify_message={todos.verify_message}
                         verify_is_success={todos.verify_is_success}
                         verify_walletId={todos.verify_walletId}
                         verify={todos.verify}
                         onChange={this.handleDataInputChange}
                         onClick={this.handleClick} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: {
            verify: state.VertifyReducer.verify,
            verify_message: state.VertifyReducer.verify_message,
            verify_walletId: state.VertifyReducer.verify_walletId,
            verify_is_success: state.VertifyReducer.verify_is_success,
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(VerifyAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)