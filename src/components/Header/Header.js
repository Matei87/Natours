import React from 'react';
import './Header.css';

import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  return (
    <header>
      <div id='homepage'>
        <div className='container-fluid'>
          <div className='row'>
            <img
              className='wow animate__animated animate__fadeInDown'
              src={require('../Tours/img/logo-white.png')}
              alt='logo'
            />
            <h1 className='wow animate__animated animate__fadeInRight'>
              Your Tour across USA
            </h1>
            <h2 className='wow animate__animated animate__fadeInLeft'>
              We create the moments that inspire you, excite you, challenge you
              and that will stay with you for life
            </h2>
            <Link to='/tours' className='btn btn-outline-primary'>
              View Tours
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
