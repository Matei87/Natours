import React from 'react';
import './Reviews.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  speed: 3000,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Reviews = () => {
  return (
    <section id='reviews'>
      <div className='container'>
        <div className='row'>
          <h3 className='wow animate__animated animate__fadeInLeft'>Reviews</h3>
          <div className='reviews'>
            <Slider {...settings}>
              <div className='review'>
                <img
                  src={require('./../Tours/img/user-4.jpg')}
                  alt='Ayla Cornell'
                />
                <h4>Ayla Cornell</h4>
                <p>Austria</p>
                <span>
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                </span>
                <p>
                  "Our 10 week trip was excellent. On each stage of our
                  adventure the planning as well as expertise of our agent was
                  evident. Her good work culminated with the efficiency."
                </p>
              </div>

              <div className='review'>
                <img
                  src={require('./../Tours/img/user-17.jpg')}
                  alt='Alexander Jones'
                />
                <h4>Alexander Jones</h4>
                <p>United States</p>
                <span>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                </span>
                <p>
                  "This is the best service I have ever seen before. I really
                  like it and give the happiness to me. Great agency, great
                  service, great great great. I recommended you this."
                </p>
              </div>

              <div className='review'>
                <img
                  src={require('./../Tours/img/user-20.jpg')}
                  alt='Lisa Brown'
                />
                <h4>Lisa Brown</h4>
                <p>United Kingdom</p>
                <span>
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                </span>
                <p>
                  "We have used all-travel for over 15 years and have had the
                  best experiences with everything. We love using our agent
                  Jennifer Hardy to smooth out all the kinks."
                </p>
              </div>

              <div className='review'>
                <img
                  src={require('./../Tours/img/user-9.jpg')}
                  alt='Cristian Vega'
                />
                <h4>Cristian Vega</h4>
                <p>Brazil</p>
                <span>
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                </span>
                <p>
                  "This is the best service I have ever seen before. I really
                  like it and give the happiness to me. Great agency, great
                  service, great great great. I recommended you this."
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
