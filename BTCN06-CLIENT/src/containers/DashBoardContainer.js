
import React from 'react'
import DashBoard from '../components/DashBoard'
import {
    Redirect
} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as DashBoardAction from '../actions/DashBoardAction'

class DashBoardContainer extends React.Component {
    constructor(props) {
        super(props);
        /*let user = '';
        try {
            user = JSON.parse(sessionStorage.getItem('user'));
            console.log('userdashboard', user);
        }
        catch (e) {
            console.log(e);
        }
        this.state = {
            isLogout: false,
            user: user,
            to: '',
            amount: '',
            message: '',
            sTransactions: [],
            rTransactions: []
        }*/
        this.handleClick = this.handleClick.bind(this);
        this.handleDataInputChange = this.handleDataInputChange.bind(this);
    }

    handleDataInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        switch(name){
            case 'to' : this.props.actions.setDashBoardTo(value); return;
            case 'amount' : this.props.actions.setDashBoardAmount(value); return;
            default : return;
        }
    }

    componentDidMount() {
        
        const token = sessionStorage.getItem('jwtToken');

        if (!token) {
            return;
        }

        this.props.actions.showAllTransactionsSend().payload
        .then((result)=>{
            this.props.actions.showAllTransactionsSendSuccess(result);
        }).catch((error)=>{
            console.log(error);
        });

        this.props.actions.showAllTransactionsReceive().payload
        .then((result)=>{
            this.props.actions.showAllTransactionsReceiveSuccess(result);
        }).catch((error)=>{
            console.log(error);
        });
    }

    handleClick() {

        var token = sessionStorage.getItem('jwtToken');

        if (!token) {
            return;
        }

        let transaction = {
            senderId: this.props.todos.user.walletId,
            receiverId: this.props.todos.to,
            amount: this.props.todos.amount,
            tradingDate : new Date()
        }
        console.log("transaction", transaction);

        let self = this;
       
        this.props.actions.sendMoney(transaction).payload
        .then((result)=>{
            if(result.data.status === 1){
                this.props.actions.sendMoneySuccess(result);
                self.componentDidMount();
                alert("Send successfully!")
            }
            else{
                this.props.actions.sendMoneyFailure(result);
                alert("Fail to send!");
            }
        }).catch((error)=>{
            console.log(error);
        })
        
    }
    
    render() {

        if (!sessionStorage.getItem('user')) {
            return <Redirect to={{
                pathname: '/login',
                state : {
                    message : 'You logged out!'
                }
            }} />
        }
        const {todos} = this.props;
        return (
            <div>
               
                <DashBoard to={todos.to}
                    amount={todos.amount}
                    rTransactions={todos.rTransactions}
                    sTransactions={todos.sTransactions}
                    user={JSON.parse(sessionStorage.getItem('user'))}
                    onChange={this.handleDataInputChange} onClick={this.handleClick} />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        todos : {
            isLogout: state.DashBoardReducer.isLogout,
            to: state.DashBoardReducer.to,
            amount: state.DashBoardReducer.amount,
            message: state.DashBoardReducer.message,
            sTransactions: state.DashBoardReducer.sTransactions,
            rTransactions: state.DashBoardReducer.rTransactions,
            user : JSON.parse(sessionStorage.getItem('user'))
        }
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators(DashBoardAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardContainer)