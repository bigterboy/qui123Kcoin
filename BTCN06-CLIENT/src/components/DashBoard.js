import React from 'react'

import SideBar from './SideBar'
import SendModal from './SendModal'



class DashBoard extends React.Component {



    render() {
        const user = JSON.parse(sessionStorage.getItem('user'));
        console.log("day la user", user);
        return (
            <div>
                <SideBar />
                <SendModal to={this.props.to} amount={this.props.amount}  onChange={this.props.onChange} onClick={this.props.onClick} />
                {/*main content start*/}
                <section id="main-content" className="grey-bg">
                    <section className="wrapper">
                        <div className="row">
                            <div className="col-lg-9">
                                <h3 className="page-header"> Your Wallet ID : {user.walletId} </h3>
                                <h3 className="page-header"> BE YOUR OWN BANK </h3>
                                <ul className="list-inline">
                                    <li><button type="button" data-target="#SendModal" data-toggle="modal" className="btn btn-warning"><i className="arrow_carrot-2up_alt2" /> Send</button></li>
                                    <li><button type="button" href="#" className="btn btn-warning"><i className="arrow_carrot-2down_alt2" /> Receive</button></li>
                                </ul>
                            </div>
                            <div className="col-lg-3">
                                <h3 className="page-header"><i className="fa fa-btc"/>{this.props.user.balances} BTC</h3>
                            </div>
                        </div>
                        {/* page start*/}
                        <div className="row">
                            <div className="col-sm-6">
                                <section className="panel">
                                    <header className="panel-heading">
                                        Send
                                    </header>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Receiver</th>
                                                <th>Amount</th>
                                                <th>Trading Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.props.sTransactions.map((transaction, index) =>
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{transaction.receiverId}</td>
                                                        <td>{transaction.amount}</td>
                                                        <td>{transaction.tradingDate}</td>
                                                    </tr>
                                                )}
                                        </tbody>
                                    </table>
                                </section>
                            </div>
                            <div className="col-sm-6">
                                <section className="panel">
                                    <header className="panel-heading">
                                        Receive
                </header>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Sender</th>
                                                <th>Amount</th>
                                                <th>Trading Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.rTransactions.map((transaction, index) => 
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{transaction.senderId}</td>
                                                    <td>{transaction.amount}</td>
                                                    <td>{transaction.tradingDate}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </section>
                            </div>
                        </div>
                        {/* page end*/}
                    </section>
                </section>
                {/*main content end*/}
            </div>
        );
    }
}

export default DashBoard