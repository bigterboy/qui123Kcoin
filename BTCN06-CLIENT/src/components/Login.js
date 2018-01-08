import React from 'react'
import {
    Link
} from 'react-router-dom'





class Login extends React.Component {
    
    render() {
        // let message = '';
        // if(this.props.location){
        //     console.log("location",this.props.location);
        //     message = this.props.location.state.message;
        // }
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <form id="sign-up">
                                <div className="row">
                                    <div className="col-sm-7">
                                        <span className="subject">Welcome to LoginPage</span>
                                    </div>
                                    <div className="col-sm-5">
                                        <span>or <Link className="btn btn-warning" to="/sign-up">Sign Up</Link></span>
                                    </div>

                                    <div className="col-sm-12">
                                        Sign in to your wallet below
                                    </div>

                                    <div className="col-sm-12">
                                        <hr />
                                        <p className="text-danger">{this.props.message}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label>Wallet ID</label>
                                            <input  onChange={this.props.onChange} name="walletId" value={this.props.walletId} className="form-control" />
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input  onChange={this.props.onChange} name="password" value={this.props.password} type="password" className="form-control" />
                                        </div>

                                        <div className="form-group">
                                            <Link to="/">Forgotten account?</Link>
                                        </div>

                                        <div className="form-group">
                                            <button onClick={this.props.onClick} className="btn btn-info btn-block" type="button">LOG IN</button>
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

export default Login