import React from 'react';
import './Navbar.css';

import { HashLink as Link } from 'react-router-hash-link';


class Navbar extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark" id="main-navigation">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#mynav" aria-controls="mynav"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>

                        <div className="collapse navbar-collapse" id="mynav">
                            <div className="navbar-nav">
                                <div className="nav-item">
                                    <Link
                                        activeclass="active"
                                        className="nav-link"
                                        to="/#homepage"
                                        smooth={true}
                                        duration={500}>
                                        Home
                                    </Link>
                                </div>
                                <div className="nav-item">
                                    <Link
                                        activeclass="active"
                                        className="nav-link"
                                        to="/tours"
                                        smooth={true}
                                        duration={500}>
                                        Tours
                                    </Link>
                                </div>
                                <div className="nav-item">
                                    <Link
                                        activeclass="active"
                                        className="nav-link logo-header"
                                        to="/#homepage"
                                        smooth={true}
                                        duration={500}>
                                        <img src={require('../Tours/img/logo-white.png')} alt="logo" />
                                    </Link>
                                </div>
                                <div className="nav-item">
                                    <Link
                                        activeclass="active"
                                        className="nav-link"
                                        to="/#about"
                                        smooth={true}
                                        duration={500}>
                                        About
                                    </Link>
                                </div>
                                <div className="nav-item">
                                    <Link
                                        activeclass="active"
                                        className="nav-link"
                                        to="/#contact"
                                        smooth={true}
                                        duration={500}>
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="log-sign">
                            <Link
                                to="login"
                                smooth={true}
                                duration={500}>
                                Log In
                            </Link>
                            <Link
                                to="signup"
                                smooth={true}
                                duration={500}>
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </nav>

            </>

        )
    }
}

export default Navbar;
