
import React from 'react'

class ForgotPassVerifyCode extends React.Component {


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <form id="sign-up">
                            <div className="row">
                                <div className="col-sm-7">
                                    <span className="subject">Forgotten Account?</span>
                                </div>

                                <div className="col-sm-5">
                                    {/*<span>or <Link className="btn btn-warning" to="/login">Login</Link></span>*/}
                                </div>

                                <div className="col-sm-12">
                                    <p className="text-info"> Please check email to get password change code</p>
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
                                        <label>Check code <span className="text-danger">*</span></label>
                                        <input onChange={this.props.onChange} value={this.props.verify} name="verify" type="text" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>New password</label>
                                        <input onChange={this.props.onChange} value={this.props.verify} name="verify" type="email" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Retype password</label>
                                        <input onChange={this.props.onChange} value={this.props.verify} name="verify" type="email" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <button onClick={this.props.onClick} className="btn btn-success btn-block" type="button">VERIFY & CHANGE PASSWORD</button>
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

export default ForgotPassVerifyCode