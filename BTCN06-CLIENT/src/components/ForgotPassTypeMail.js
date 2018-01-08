
import React from 'react'

class ForgotPassTypeMail extends React.Component {


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
                                    <p className="text-danger">Please enter an email to send us a confirmation</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input onChange={this.props.onChange} value={this.props.verify} name="email" type="email" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <button onClick={this.props.onClick} className="btn btn-info btn-block" type="button">SEND</button>
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

export default ForgotPassTypeMail