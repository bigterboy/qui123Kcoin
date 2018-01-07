
import React from 'react'

import {
    Link
} from 'react-router-dom'


class SignUp extends React.Component {


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <form id="sign-up">

                            <div className="row">
                                <div className="col-sm-7">
                                    <span className="subject">Create Your Wallet</span>
                                </div>
                                <div className="col-sm-5">
                                    <span>or <strong><Link className="btn btn-warning" to="/login">Login</Link></strong></span>
                                </div>

                                <div className="col-sm-12">
                                    Sign up for free wallet below
                                </div>

                                <div className="col-sm-12">
                                    <hr />

                                    {
                                        this.props.user ? (
                                                <div>
                                                    <p className="text-success">{this.props.message}</p>
                                                    <span className="text-success subject">Your Wallet Id : {this.props.user.walletId}</span>
                                                </div>
                                            ):
                                            (
                                                <p className="text-danger">{this.props.message}</p>
                                            )
                                    }



                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input onChange={this.props.onChange} value={this.props.email} name="email" type="email" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Stoken vertify</label>
                                        <input onChange={this.props.onChange} value={this.props.vertify} name="vertify" type="email" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input onChange={this.props.onChange} value={this.props.password} name="password" type="password" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input onChange={this.props.onChange} value={this.props.rePassword} name="rePassword" type="password" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <button onClick={this.props.onClick} className="btn btn-info btn-block" type="button">SIGN UP</button>
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

export default SignUp