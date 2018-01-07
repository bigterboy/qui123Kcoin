
import React from 'react'

import {
    Link
} from 'react-router-dom'


class Verify extends React.Component {


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <form id="sign-up">
                            <div className="row">
                                <div className="col-sm-7">
                                    <span className="subject">Verify Your Wallet</span>
                                </div>

                                <div className="col-sm-5">
                                    <span>or <Link className="btn btn-warning" to="/login">Login</Link></span>
                                </div>

                                <div className="col-sm-12">
                                    Check your verify code
                                </div>

                                <div className="col-sm-12">
                                    <hr />
                                    {
                                        this.props.verify_is_success ?
                                            (
                                                <div>
                                                    <p className="text-success">{this.props.verify_message}</p>
                                                    <span className="text-success subject">Your Wallet Id : {this.props.verify_walletId}</span>
                                                </div>
                                            )
                                            :
                                            (
                                                <p className="text-danger">{this.props.verify_message}</p>
                                            )
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Stoken verify</label>
                                        <input onChange={this.props.onChange} value={this.props.verify} name="verify" type="email" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <button onClick={this.props.onClick} className="btn btn-info btn-block" type="button">VERIFY & GET WALLET</button>
                                    </div>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Verify