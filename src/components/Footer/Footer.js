import React from 'react';
import './Footer.css';

import { HashLink as Link } from 'react-router-hash-link';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="logo-footer">
                    <img src={require('../Tours/img/logo-green-small.png')} alt="logo-green-small" />
                </div>
                <div className="links">
                    <ul>
                        <li>
                            <Link to="/#about">About</Link>
                        </li>
                        <li>
                            <Link to="/#contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/terms">Terms</Link>
                        </li>
                    </ul>
                    <div className="credentials"><span>@ {new Date().getFullYear()} by&nbsp; <span className="name">Matei Mircea</span></span></div>
                </div>
            </footer>
        )
    }
}

export default Footer;
