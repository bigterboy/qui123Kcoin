import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ForgotPassTypeMail from '../components/ForgotPassTypeMail'
import * as ForgotPassAction from "../actions/ForgotPassAction";

class ForgotPassTypeEmailContainer extends React.Component {
    handleDataInputChange(e) {
        const value = e.target.value;
        this.props.actions.setEmail(value);
    }

    render() {
        const {todos} = this.props;
        return (
            <div>
                <ForgotPassTypeMail
                    email={todos.email}
                    onChange={this.handleDataInputChange.bind(this)}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: {
            email: state.ForgotPassReducer.email
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ForgotPassAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassTypeEmailContainer)