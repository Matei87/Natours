import React from 'react';
import './Login.css';


class Login extends React.Component {
    render() {
        document.title = "Natours | Login";
        return (
            <div className="container" id="login">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="head">
                                <p>Login</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" className="form-control" placeholder="Enter email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" className="form-control" placeholder="Enter Password" required />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default Login;