import React from 'react'
import { connect } from 'react-redux';
import ForgotPassVerifyCode from '../components/ForgotPassVerifyCode'

class ForgotPassVerifyCodeContainer extends React.Component {
    render() {
        // const {todos, actions} = this.props;
        return (
            <div>
                <ForgotPassVerifyCode />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: {
            // trống
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // trống
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassVerifyCodeContainer)