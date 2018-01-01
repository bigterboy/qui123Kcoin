import React from 'react'




class Home extends React.Component {

    render() {
        return (
            <div className="wrapper grey-bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="panel panel-default">
                            <div className="panel-heading"><h2><strong>LATEST BLOCKS</strong></h2></div>
                            <div className="panel-body" style={{overflow:'auto'}}>

                                <table className="table table-hover table-responsive">
                                    <tbody>
                                        <tr>
                                            <th>#</th>
                                            <th>Sender</th>
                                            <th>Receiver</th>
                                            <th>Amount</th>
                                            <th>Trading Date</th>
                                        </tr>

                                        {this.props.transactions.map((transaction, index) =>
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{transaction.senderId}</td>
                                                <td>{transaction.receiverId}</td>
                                                <td>{transaction.amount}</td>
                                                <td>{transaction.tradingDate.replace(/T/, ' ').replace(/\..+/, '')}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home