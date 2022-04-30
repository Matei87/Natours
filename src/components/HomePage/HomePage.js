import React from 'react';

import Header from '../Header/Header';
import About from '../About/About';
import Reviews from '../Reviews/Reviews';
import Contact from '../Contact/Contact';

const HomePage = () => {
  document.title = 'Natours';

  return (
    <>
      <Header />
      <About />
      <Reviews />
      <Contact />
    </>
  );
};

export default HomePage;
