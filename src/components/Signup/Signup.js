import React from 'react';
import './Signup.css';


class Signup extends React.Component {
    render() {
        document.title = "Natours | Signup";
        return (
            <div className="container" id="signup">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="head">
                                <p>Signup</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" className="form-control" placeholder="Enter email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password1">Password</label>
                                <input type="password" id="password1" className="form-control" placeholder="Enter Password" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password2">Password</label>
                                <input type="password" id="password2" className="form-control" placeholder="Enter Password" required />
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

export default Signup;