import React from 'react'

class SendModal extends React.Component {

    render() {
        return (
            <div className="container">
                {/* Modal */}
                <div className="modal fade" id="SendModal" role="dialog" >
                    <div className="modal-dialog">
                        {/* Modal content*/}
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">×</button>
                                <h4 className="modal-title"><i className="arrow_carrot-2up_alt2"/> SEND</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label><i className="fa fa-address-card"/> To</label>
                                        <input name="to" onChange={this.props.onChange} value={this.props.to} type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label><i className="fa fa-btc"/> Amount Of Money (BTC)</label>
                                        <input name="amount" onChange={this.props.onChange} value={this.props.amount} type="text" className="form-control" /> 
                                    </div>
                                    <button onClick={this.props.onClick} className="btn btn-info btn-block" type="button">Send</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SendModal