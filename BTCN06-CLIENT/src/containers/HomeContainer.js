import React from 'react'
import Home from '../components/Home'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomeAction from '../actions/HomeAction'



class HomeContainer extends React.Component{

    constructor(props){
        super(props);
       
        
    }

    componentDidMount() {
        console.log("Day la transaction");
        
        this.props.actions.showAllTransactions().payload.then((result)=>{
            console.log("co vào", result);
            if(result.data.status === 1){
                this.props.actions.showAllTransactionsSuccess(result);
            }
            else{
                this.props.actions.showAllTransactionsFailure(result);
            }
        }).catch((error)=>{
            console.log(error);
        });
    }



    render(){
        return(
            <div>
                <Home transactions={this.props.transactions}/>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        transactions : state.HomeReducer.transactions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(HomeAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)