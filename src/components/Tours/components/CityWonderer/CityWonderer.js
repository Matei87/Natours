import { useState, useEffect } from 'react';
import './CityWonderer.css';

import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import settings from '../shared/settings';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-74.259863, 40.6976],
      },
      properties: {
        description: 'Day 1: New York',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-83.1692447, 42.0528165],
      },
      properties: {
        description: 'Day 2: Detroit',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-80.0505403, 40.4314779],
      },
      properties: {
        description: 'Day 3: Pittsburgh',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.084615, 38.893709],
      },
      properties: {
        description: 'Day 3: Washington DC',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-80.9799129, 35.2033533],
      },
      properties: {
        description: 'Day 4: Charlotte',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-84.5323134, 33.6978109],
      },
      properties: {
        description: 'Day 5: Atlanta',
      },
    },
  ],
};

const CityWonderer = () => {
  const [viewport, setViewport] = useState({});

  useEffect(() => {
    setViewport({
      longitude: -78.4411879,
      latitude: 38.495585,
      width: '100%',
      height: '100vh',
      zoom: 4,
    });
  }, []);

  document.title = 'Natours | The City Wonderer';

  return (
    <div className='container-fluid' id='city-wonderer'>
      <div className='row'>
        <div className='col-md-12 '>
          <div className='header'>
            <div className='overlay'></div>
            <img
              src={require('./../../img/tour-4.jpg')}
              alt='the-city-wonderer'
            />
          </div>
          <div className='box'>
            <h1>
              <span>The City Wonderer tour</span>
            </h1>
            <div className='box-group'>
              <div className='box-group-details'>
                <i className='far fa-clock' />
                <span>5 DAYS</span>
              </div>
              <div className='box-group-details'>
                <i className='fas fa-map-marker-alt' />
                <span>NYC, USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-12'>
          <div className='overview-box'>
            <div>
              <div className='overview-box-group'>
                <h2>quick facts</h2>
                <div className='overview-box-group-detail'>
                  <i className='far fa-calendar' />
                  <span>Next Date</span>
                  <span>September 2021</span>
                </div>
                <div className='overview-box-group-detail'>
                  <i className='fas fa-chart-line' />
                  <span>Difficulty</span>
                  <span>Easy</span>
                </div>
                <div className='overview-box-group-detail'>
                  <i className='far fa-user' />
                  <span>Participants</span>
                  <span>20 People</span>
                </div>
                <div className='overview-box-group-detail'>
                  <i className='far fa-star' />
                  <span>Rating</span>
                  <span>4.9 / 6</span>
                </div>
              </div>
              <div className='overview-box-group'>
                <h2>Your tour guides</h2>
                <div className='overview-box-group-detail'>
                  <img
                    src={require('./../../img/user-12.jpg')}
                    alt='Lead.Guide'
                  />
                  <span>Lead Guide</span>
                  <span>Miyah Myles</span>
                </div>
                <div className='overview-box-group-detail'>
                  <img
                    src={require('./../../img/user-7.jpg')}
                    alt='Tour.Guide'
                  />
                  <span>Tour Guide</span>
                  <span>Kate Morrison</span>
                </div>
              </div>
            </div>
          </div>
          <div className='description-box'>
            <h2>About The City Wonderer tour</h2>
            <p className='description-text'>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat lorem ipsum dolor sit amet.
            </p>
            <p className='description-text'>
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur, nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat!
            </p>
          </div>
        </div>

        <div className='col-md-12'>
          <div className='picture-box'>
            <img src={require('./../../img/tour-4-1.jpg')} alt='tour-4-1' />
          </div>
          <div className='picture-box'>
            <img src={require('./../../img/tour-4-2.jpg')} alt='tour-4-2' />
          </div>
          <div className='picture-box'>
            <img src={require('./../../img/tour-4-3.jpg')} alt='tour-4-3' />
          </div>
        </div>

        <div className='col-md-12'>
          <div id='map'>
            <ReactMapGL
              {...viewport}
              mapboxApiAccessToken={
                'pk.eyJ1Ijoiam9uYXNzY2htZWR0bWFubiIsImEiOiJjam54ZmM5N3gwNjAzM3dtZDNxYTVlMnd2In0.ytpI7V7w7cyT1Kq5rT9Z1A'
              }
              mapStyle='mapbox://styles/jonasschmedtmann/cjnxfn3zk7bj52rpegdltx58h'
            >
              {geojson.features.map((park) => (
                <Marker
                  key={park.geometry.coordinates}
                  longitude={park.geometry.coordinates[0]}
                  latitude={park.geometry.coordinates[1]}
                >
                  <Popup
                    className='mapbox-popup'
                    latitude={park.geometry.coordinates[1]}
                    longitude={park.geometry.coordinates[0]}
                    closeButton={false}
                    dynamicPosition={false}
                  >
                    {park.properties.description}
                  </Popup>
                </Marker>
              ))}
            </ReactMapGL>
          </div>
        </div>

        <div className='col-md-12'>
          <div className='container'>
            <Slider {...settings}>
              <div className='col-md-4'>
                <div className='card'>
                  <div className='card-header'>
                    <img
                      src={require('./../../img/user-20.jpg')}
                      alt='Lisa Brown'
                    />
                    <span>Lisa Brown</span>
                  </div>
                  <div className='card-body'>
                    <p>
                      Cras mollis nisi parturient mi nec aliquet suspendisse
                      sagittis eros condimentum scelerisque taciti mattis
                      praesent feugiat eu nascetur a tincidunt
                    </p>
                  </div>
                  <div className='card-footer'>
                    <span>
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                    </span>
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='card'>
                  <div className='card-header'>
                    <img
                      src={require('./../../img/user-15.jpg')}
                      alt='Max Smith'
                    />
                    <span>Max Smith</span>
                  </div>
                  <div className='card-body'>
                    <p>
                      Sem feugiat sed lorem vel dignissim platea habitasse dolor
                      suscipit ultricies dapibus
                    </p>
                  </div>
                  <div className='card-footer'>
                    <span>
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='far fa-star' />
                      <i className='far fa-star' />
                    </span>
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='card'>
                  <div className='card-header'>
                    <img
                      src={require('./../../img/user-4.jpg')}
                      alt='Ayla Cornell'
                    />
                    <span>Ayla Cornell</span>
                  </div>
                  <div className='card-body'>
                    <p>
                      Blandit varius nascetur est felis praesent lorem himenaeos
                      pretium dapibus tellus bibendum consequat ac duis
                    </p>
                  </div>
                  <div className='card-footer'>
                    <span>
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                    </span>
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='card'>
                  <div className='card-header'>
                    <img
                      src={require('./../../img/user-2.jpg')}
                      alt='Lourdes Browning'
                    />
                    <span>Lourdes Browning</span>
                  </div>
                  <div className='card-body'>
                    <p>
                      Tempor pellentesque eu placerat auctor enim nam suscipit
                      tincidunt natoque ipsum est
                    </p>
                  </div>
                  <div className='card-footer'>
                    <span>
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='far fa-star' />
                    </span>
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='card'>
                  <div className='card-header'>
                    <img
                      src={require('./../../img/user-18.jpg')}
                      alt='Eduardo Hernandez'
                    />
                    <span>Eduardo Hernandez</span>
                  </div>
                  <div className='card-body'>
                    <p>
                      Magna magnis tellus dui vivamus donec placerat vehicula
                      erat turpis
                    </p>
                  </div>
                  <div className='card-footer'>
                    <span>
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                    </span>
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='card'>
                  <div className='card-header'>
                    <img
                      src={require('./../../img/user-19.jpg')}
                      alt='John Riley'
                    />
                    <span>John Riley</span>
                  </div>
                  <div className='card-body'>
                    <p>
                      Tempor pellentesque eu placerat auctor enim nam suscipit
                      tincidunt natoque ipsum est
                    </p>
                  </div>
                  <div className='card-footer'>
                    <span>
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='far fa-star' />
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className='col-md-12'>
          <div className='cont'>
            <div className='cont-img'>
              <img src={require('./../../img/logo-white.png')} alt='logo' />
            </div>

            <img src={require('./../../img/tour-4-2.jpg')} alt='tour4' />
            <img src={require('./../../img/tour-4-3.jpg')} alt='tour4' />
            <div className='content'>
              <div>
                <h2>What are you waiting for?</h2>
                <p>
                  5 days. 1 adventure. Infinite memories. Make it yours today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityWonderer;
