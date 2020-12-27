import React from 'react';
import './Signup.css';


class Signup extends React.Component {
    render() {
        document.title = "Natours | Signup";
        return (
            <div id="signup">
                <div className="container">

                    <div className="row">
                        <div className="col-md-10 col-lg-7">
                            <form>
                                <h3>Signup</h3>

                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" id="email" className="form-control" placeholder="email@example.com" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password1">Password</label>
                                    <input type="password" id="password1" className="form-control" placeholder="*****" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password2">Confirm Password</label>
                                    <input type="password" id="password2" className="form-control" placeholder="*****" required />
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

export default Signup;