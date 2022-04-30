import { useState, useEffect } from 'react';
import './SeaExplorer.css';

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
        coordinates: [-81.4099001, 30.3884995],
      },
      properties: {
        description: 'Day 1: Mayport Naval Station',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-81.2969483, 29.5330742],
      },
      properties: {
        description: 'Day 2: Palm Coast',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-80.6167424, 28.4105909],
      },
      properties: {
        description: 'Day 2: Port Canaveral',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-80.4143906, 27.645193],
      },
      properties: {
        description: 'Day 3: Daytona Lagoon',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-80.1990799, 26.7419207],
      },
      properties: {
        description: 'Day 4: West Palm Beach',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-80.4471707, 26.0449504],
      },
      properties: {
        description: 'Day 5: Hollywood',
      },
    },
  ],
};

const SeaExplorer = () => {
  const [viewport, setViewport] = useState({});

  useEffect(() => {
    setViewport({
      longitude: -80.760254,
      latitude: 28.84402,
      width: '100%',
      height: '100vh',
      zoom: 5,
    });
  }, []);

  document.title = 'Natours | The Sea Explorer';

  return (
    <div className='container-fluid' id='sea-explorer'>
      <div className='row'>
        <div className='col-md-12 '>
          <div className='header'>
            <div className='overlay'></div>
            <img src={require('./../../img/nat-5.jpg')} alt='nat-5' />
          </div>
          <div className='box'>
            <h1>
              <span>The sea explorer tour</span>
            </h1>
            <div className='box-group'>
              <div className='box-group-details'>
                <i className='far fa-clock' />
                <span>5 DAYS</span>
              </div>
              <div className='box-group-details'>
                <i className='fas fa-map-marker-alt' />
                <span>Florida, USA</span>
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
                  <span>May 2021</span>
                </div>
                <div className='overview-box-group-detail'>
                  <i className='fas fa-chart-line' />
                  <span>Difficulty</span>
                  <span>Medium</span>
                </div>
                <div className='overview-box-group-detail'>
                  <i className='far fa-user' />
                  <span>Participants</span>
                  <span>10 People</span>
                </div>
                <div className='overview-box-group-detail'>
                  <i className='far fa-star' />
                  <span>Rating</span>
                  <span>4.8 / 5</span>
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
                    src={require('./../../img/user-6.jpg')}
                    alt='Tour.Guide'
                  />
                  <span>Tour Guide</span>
                  <span>Jennifer Hardy</span>
                </div>
              </div>
            </div>
          </div>
          <div className='description-box'>
            <h2>About The Sea Explorer tour</h2>
            <p className='description-text'>
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </p>
            <p className='description-text'>
              Irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        <div className='col-md-12'>
          <div className='picture-box'>
            <img src={require('./../../img/tour-2-1.jpg')} alt='tour-2-1' />
          </div>
          <div className='picture-box'>
            <img src={require('./../../img/tour-2-2.jpg')} alt='tour-2-2' />
          </div>
          <div className='picture-box'>
            <img src={require('./../../img/tour-2-3.jpg')} alt='tour-2-3' />
          </div>
        </div>

        <div className='col-md-12'>
          <div id='map'>
            <ReactMapGL
              {...viewport}
              mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
              style={{width: '100vw', height: '100vh'}}
              mapStyle='mapbox://styles/mapbox/streets-v11'
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
                      src={require('./../../img/user-2.jpg')}
                      alt='Lourdes Browning'
                    />
                    <span>Lourdes Browning</span>
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
                      src={require('./../../img/user-3.jpg')}
                      alt='Sophie Louise Hart'
                    />
                    <span>Sophie Louise Hart</span>
                  </div>
                  <div className='card-body'>
                    <p>
                      Pulvinar taciti etiam aenean lacinia natoque interdum
                      fringilla suspendisse nam sapien urna!
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
                      src={require('./../../img/user-9.jpg')}
                      alt='Cristian Vega'
                    />
                    <span>Cristian Vega</span>
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
                      src={require('./../../img/user-14.jpg')}
                      alt='Laura Sarah Wilson'
                    />
                    <span>Laura Sarah Wilson</span>
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
                      <i className='far fa-star' />
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

            <img src={require('./../../img/tour-2-2.jpg')} alt='tour2' />
            <img src={require('./../../img/tour-2-1.jpg')} alt='tour1' />
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

export default SeaExplorer;
