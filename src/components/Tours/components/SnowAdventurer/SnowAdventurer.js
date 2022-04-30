import { useState, useEffect } from 'react';
import './SnowAdventurer.css';

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
        coordinates: [-106.1061226, 39.553125],
      },
      properties: {
        description: 'Day 1: Frisco',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-106.137434, 39.494596],
      },
      properties: {
        description: 'Day 2: Tenmile Peak',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-106.076606, 39.469219],
      },
      properties: {
        description: 'Day 3: Breckenridge Ski Resort',
      },
    },
  ],
};

const SnowAdventurer = () => {
  const [viewport, setViewport] = useState({});

  useEffect(() => {
    setViewport({
        longitude: -106.137434,
        latitude: 39.494596,
        width: '100%',
        height: '100vh',
        zoom: 10,
    });
  }, []);

  document.title = 'Natours | The Snow Adventurer';

  return (
    <div className='container-fluid' id='snow-adventurer'>
      <div className='row'>
        <div className='col-md-12 '>
          <div className='header'>
            <div className='overlay'></div>
            <img
              src={require('./../../img/nat-7.jpg')}
              alt='the-snow-adventurer'
            />
          </div>
          <div className='box'>
            <h1>
              <span>The snow adventurer tour</span>
            </h1>
            <div className='box-group'>
              <div className='box-group-details'>
                <i className='far fa-clock' />
                <span>3 DAYS</span>
              </div>
              <div className='box-group-details'>
                <i className='fas fa-map-marker-alt' />
                <span>Colorado, USA</span>
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
                  <span>March 2021</span>
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
                  <span>4.9 / 5</span>
                </div>
              </div>
              <div className='overview-box-group'>
                <h2>Your tour guides</h2>
                <div className='overview-box-group-detail'>
                  <img
                    src={require('./../../img/user-10.jpg')}
                    alt='Lead.Guide'
                  />
                  <span>Lead Guide</span>
                  <span>Steve Scaife</span>
                </div>
                <div className='overview-box-group-detail'>
                  <img
                    src={require('./../../img/user-13.jpg')}
                    alt='Tour.Guide'
                  />
                  <span>Tour Guide</span>
                  <span>Ben Hadley</span>
                </div>
              </div>
            </div>
          </div>
          <div className='description-box'>
            <h2>About The Snow Adventurer tour</h2>
            <p className='description-text'>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,
              ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum!
            </p>
            <p className='description-text'>
              Dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur, exercitation ullamco laboris nisi ut
              aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!
            </p>
          </div>
        </div>

        <div className='col-md-12'>
          <div className='picture-box'>
            <img src={require('./../../img/tour-3-1.jpg')} alt='tour-3-1' />
          </div>
          <div className='picture-box'>
            <img src={require('./../../img/tour-3-2.jpg')} alt='tour-3-2' />
          </div>
          <div className='picture-box'>
            <img src={require('./../../img/tour-3-3.jpg')} alt='tour-3-3' />
          </div>
        </div>

        <div className='col-md-12'>
          <div id='map'>
            <ReactMapGL
              {...viewport}
              mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
              mapStyle='mapbox://styles/mapbox/streets-v11'
              style={{width: '100%', height: '100vh'}}
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
                      src={require('./../../img/user-16.jpg')}
                      alt='Isabel Kirkland'
                    />
                    <span>Isabel Kirkland</span>
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
                      src={require('./../../img/user-18.jpg')}
                      alt='Eduardo Hernandez'
                    />
                    <span>Eduardo Felix</span>
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
                      <i className='far fa-star' />
                    </span>
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='card'>
                  <div className='card-header'>
                    <img
                      src={require('./../../img/user-17.jpg')}
                      alt='Alexander Jones'
                    />
                    <span>Alexander Jones</span>
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
            </Slider>
          </div>
        </div>

        <div className='col-md-12'>
          <div className='cont'>
            <div className='cont-img'>
              <img src={require('./../../img/logo-white.png')} alt='logo' />
            </div>

            <img src={require('./../../img/tour-3-2.jpg')} alt='tour3' />
            <img src={require('./../../img/tour-3-3.jpg')} alt='tour3' />
            <div className='content'>
              <div>
                <h2>What are you waiting for?</h2>
                <p>
                  3 days. 1 adventure. Infinite memories. Make it yours today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnowAdventurer;
