import React from 'react';
import './Login.css';


class Login extends React.Component {
    render() {
        document.title = "Natours | Login";
        return (
            <div id="login">
                <div className="container">

                    <div className="row">

                        <div className="col-sm-10 col-md-10 col-lg-7">
                            <form>
                                <h3>Login</h3>

                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" id="email" className="form-control" placeholder="email@example.com" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" className="form-control" placeholder="*****" required />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block">Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Login;