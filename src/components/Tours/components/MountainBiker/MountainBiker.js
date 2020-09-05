import React from 'react';
import './MountainBiker.css';


import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geojson = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-114.571560, 47.965655]
            },
            properties: {
                description: 'Day 1: Kalispell'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-113.7807414, 47.3981984]
            },
            properties: {
                description: 'Day 2: Polson'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-114.300096, 46.784778]
            },
            properties: {
                description: 'Day 3: Missoula'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-112.085733, 46.593454]
            },
            properties: {
                description: 'Day 3: Helena'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-113.093868, 46.006918]
            },
            properties: {
                description: 'Day 4: Table Mountain'
            }

        }
    ]
};


class MountainBiker extends React.Component {
    state = {
        viewport: {}
    }

    componentDidMount() {
        this.setState({
            viewport: {
                longitude: -114.199334,
                latitude: 46.804729,
                width: '100%',
                height: '100vh',
                zoom: 5.5
            }
        })
    }


    render() {
        document.title = "Natours | The Mountain Biker";

        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (
            <>
                <div className="container-fluid" id="mountain-biker">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="header">
                                <div className="overlay"></div>
                                <img src={require('./../../img/the-mountain-biker.jpg')} alt="the-mountain-biker" />
                            </div>
                            <div className="box">
                                <h1>
                                    <span>The mountain biker tour</span>
                                </h1>
                                <div className="box-group">
                                    <div className="box-group-details">
                                        <i className="far fa-clock" />
                                        <span>4 DAYS</span>
                                    </div>
                                    <div className="box-group-details">
                                        <i className="fas fa-map-marker-alt" />
                                        <span>Montana, USA</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="overview-box">
                                <div>
                                    <div className="overview-box-group">
                                        <h2>quick facts</h2>
                                        <div className="overview-box-group-detail">
                                            <i className="far fa-calendar" />
                                            <span>Next Date</span>
                                            <span>July 2021</span>
                                        </div>
                                        <div className="overview-box-group-detail">
                                            <i className="fas fa-chart-line" />
                                            <span>Difficulty</span>
                                            <span>Difficult</span>
                                        </div>
                                        <div className="overview-box-group-detail">
                                            <i className="far fa-user" />
                                            <span>Participants</span>
                                            <span>15 People</span>
                                        </div>
                                        <div className="overview-box-group-detail">
                                            <i className="far fa-star" />
                                            <span>Rating</span>
                                            <span>4.7 / 5</span>
                                        </div>
                                    </div>
                                    <div className="overview-box-group">
                                        <h2>Your tour guides</h2>
                                        <div className="overview-box-group-detail">
                                            <img src={require('./../../img/user-10.jpg')} alt="Lead.Guide" />
                                            <span>Lead Guide</span>
                                            <span>Steve Scaife</span>
                                        </div>
                                        <div className="overview-box-group-detail">
                                            <img src={require('./../../img/user-11.jpeg')} alt="Tour.Guide" />
                                            <span>Tour Guide</span>
                                            <span>Leo Gillespie</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="description-box">
                                <h2>About The Mountain Bike tour</h2>
                                <p className="description-text">
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                                <p className="description-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="picture-box">
                                <img src={require('./../../img/tour-2.jpeg')} alt="tour-2" />
                            </div>
                            <div className="picture-box">
                                <img src={require('./../../img/tour-5cdb06c8d87ca1051d90eda9-1557860998703-1.jpeg')} alt="tour-2-2" />
                            </div>
                            <div className="picture-box">
                                <img src={require('./../../img/tour-5cdb06c8d87ca1051d90eda9-1557860998703-3.jpeg')} alt="tour-2-3" />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div id="map">
                                <ReactMapGL
                                    {...this.state.viewport}
                                    mapboxApiAccessToken={'pk.eyJ1Ijoiam9uYXNzY2htZWR0bWFubiIsImEiOiJjam54ZmM5N3gwNjAzM3dtZDNxYTVlMnd2In0.ytpI7V7w7cyT1Kq5rT9Z1A'}
                                    mapStyle="mapbox://styles/jonasschmedtmann/cjnxfn3zk7bj52rpegdltx58h"
                                >
                                    {geojson.features.map(park => (
                                        <Marker
                                            key={park.geometry.coordinates}
                                            longitude={park.geometry.coordinates[0]}
                                            latitude={park.geometry.coordinates[1]}
                                        >
                                            <Popup
                                                className="mapbox-popup"
                                                latitude={park.geometry.coordinates[1]}
                                                longitude={park.geometry.coordinates[0]}
                                                closeButton={false}
                                                dynamicPosition={false}>

                                                {park.properties.description}

                                            </Popup>
                                        </Marker>
                                    ))}
                                </ReactMapGL>
                            </div>

                        </div>

                        <div className="col-md-12">

                            <div className="container">


                                <Slider {...settings}>

                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src={require('./../../img/user-8.jpg')} alt="Eliana Stout" />
                                                <span>Eliana Stout</span>
                                            </div>
                                            <div className="card-body">
                                                <p>
                                                    Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti mattis praesent feugiat eu nascetur a tincidunt
                                                    </p>
                                            </div>
                                            <div className="card-footer">
                                                <span>
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src={require('./../../img/user-16.jpg')} alt="Isabel Kirkland" />
                                                <span>Isabel Kirkland</span>
                                            </div>
                                            <div className="card-body">
                                                <p>
                                                    Sem feugiat sed lorem vel dignissim platea habitasse dolor suscipit ultricies dapibus
                                                    </p>
                                            </div>
                                            <div className="card-footer">
                                                <span>
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="far fa-star" />
                                                    <i className="far fa-star" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src={require('./../../img/user-18.jpg')} alt="Eduardo Hernandez" />
                                                <span>Eduardo Felix</span>
                                            </div>
                                            <div className="card-body">
                                                <p>
                                                    Blandit varius nascetur est felis praesent lorem himenaeos pretium dapibus tellus bibendum consequat ac duis
                                                    </p>
                                            </div>
                                            <div className="card-footer">
                                                <span>
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src={require('./../../img/user-19.jpg')} alt="John Riley" />
                                                <span>John Riley</span>
                                            </div>
                                            <div className="card-body">
                                                <p>
                                                    Magna magnis tellus dui vivamus donec placerat vehicula erat turpis
                                                    </p>
                                            </div>
                                            <div className="card-footer">
                                                <span>
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>




                            </div>

                        </div>

                        <div className="col-md-12">

                            <div className="cont">
                                <div className="cont-img">
                                    <img src={require('./../../img/logo-white.png')} alt="logo" />
                                </div>

                                <img src={require('./../../img/tour-5cdb06c8d87ca1051d90eda9-1557860998703-1.jpeg')} alt="tour2" />
                                <img src={require('./../../img/tour-5cdb06c8d87ca1051d90eda9-1557860998703-3.jpeg')} alt="tour1" />
                                <div className="content">
                                    <div>
                                        <h2>What are you waiting for?</h2>
                                        <p>4 days. 1 adventure. Infinite memories. Make it yours today!</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default MountainBiker;