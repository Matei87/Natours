import { useState, useEffect } from 'react';
import './ForestHiker.css';

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
        coordinates: [-107.372527, 39.4320286],
      },
      properties: {
        description: 'Day 1: Gleenwood Springs',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-107.438065, 39.284315],
      },
      properties: {
        description: 'Day 5: Twin Peaks',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-107.3699321, 39.0201405],
      },
      properties: {
        description: 'Day 10: Ragged Mountain',
      },
    },
  ],
};

const ForestHiker = () => {
  const [viewport, setViewport] = useState({});

  useEffect(() => {
    setViewport({
      longitude: -107.3003171,
      latitude: 39.253601,
      width: '100%',
      height: '100vh',
      zoom: 8,
    });
  }, []);

  document.title = 'Natours | The Forest Hiker';

  return (
    <div className='container-fluid' id='forest-hiker'>
      <div className='row'>
        <div className='col-md-12 '>
          <div className='header'>
            <div className='overlay'></div>
            <img
              src={require('./../../img/tour-1.jpg')}
              alt='the-forest-hiker'
            />
          </div>
          <div className='box'>
            <h1>
              <span>The Forest Hiker tour</span>
            </h1>
            <div className='box-group'>
              <div className='box-group-details'>
                <i className='far fa-clock' />
                <span>14 DAYS</span>
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
                  <span>April 2021</span>
                </div>
                <div className='overview-box-group-detail'>
                  <i className='fas fa-chart-line' />
                  <span>Difficulty</span>
                  <span>Medium</span>
                </div>
                <div className='overview-box-group-detail'>
                  <i className='far fa-user' />
                  <span>Participants</span>
                  <span>20 People</span>
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
                    src={require('./../../img/user-11.jpeg')}
                    alt='Tour.Guide'
                  />
                  <span>Tour Guide</span>
                  <span>Leo Gillespie</span>
                </div>
              </div>
            </div>
          </div>
          <div className='description-box'>
            <h2>About The Forest Hiker tour</h2>
            <p className='description-text'>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,
              ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className='description-text'>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className='col-md-12'>
          <div className='picture-box'>
            <img src={require('./../../img/tour-1-1.jpg')} alt='tour-1-1' />
          </div>
          <div className='picture-box'>
            <img src={require('./../../img/tour-1-2.jpg')} alt='tour-1-2' />
          </div>
          <div className='picture-box'>
            <img src={require('./../../img/tour-1-3.jpg')} alt='tour-1-3' />
          </div>
        </div>

        <div className='col-md-12'>
          <div id='map'>
            <ReactMapGL
              {...viewport}
              mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
              mapStyle='mapbox://styles/mapbox/streets-v11'
              style={{width: '100vw', height: '100vh'}}
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
                      src={require('./../../img/user-4.jpg')}
                      alt='Ayla Cornell'
                    />
                    <span>Ayla Cornell</span>
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
                      src={require('./../../img/user-8.jpg')}
                      alt='Eliana Stout'
                    />
                    <span>Eliana Stout</span>
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
                      src={require('./../../img/user-9.jpg')}
                      alt='Cristian Vega'
                    />
                    <span>Cristian Vega</span>
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
                      src={require('./../../img/user-17.jpg')}
                      alt='Alexander Jones'
                    />
                    <span>Alexander Jones</span>
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
                      src={require('./../../img/user-20.jpg')}
                      alt='Lisa Brown'
                    />
                    <span>Lisa Brown</span>
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
                      <i className='far fa-star' />
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

            <img src={require('./../../img/tour-1-2.jpg')} alt='tour1' />
            <img src={require('./../../img/tour-1-3.jpg')} alt='tour1' />
            <div className='content'>
              <div>
                <h2>What are you waiting for?</h2>
                <p>
                  14 days. 1 adventure. Infinite memories. Make it yours today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForestHiker;
