import React from 'react';
import './Tours.css';

import { Link } from 'react-router-dom';


class Tours extends React.Component {
    render() {
        document.title = "Natours | Tours";

        return (
            <div className="container" id="tours">

                <h3 className="wow animate__animated animate__fadeInLeft title">Explore our Tours</h3>

                <div className="row">

                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="card">

                            <div className="card-header">
                                <div className="card-picture">
                                    <div className="card-picture-overlay"></div>
                                    <img className="img" src={require('./img/nat-5.jpg')} alt="nat-5" />
                                </div>
                                <h3><span>The Sea Explorer</span></h3>
                            </div>

                            <div className="card-body">
                                <h4>medium 5-day tour</h4>
                                <p>Exploring the jaw-dropping US east coast by foot and by boat</p>

                                <div className="card-body-data">
                                    <div className="data">
                                        <i className="fas fa-map-marker-alt" />
                                        <span>Florida, USA</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-calendar" />
                                        <span>May 2021</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-flag" />
                                        <span>6 stops</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-user" />
                                        <span>10 people</span>
                                    </div>
                                </div>

                            </div>

                            <div className="card-footer">
                                <div className="card-footer-details">
                                    <p><span className="value">$997</span> <span className="text">per person</span></p>
                                    <p><span className="value">4.8</span> <span className="text">rating (6)</span></p>
                                </div>
                                <Link to="/tours/the-sea-explorer">
                                    <button className="btn btn-success">Details</button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-6  col-md-6 col-lg-4">
                        <div className="card">

                            <div className="card-header">
                                <div className="card-picture">
                                    <div className="card-picture-overlay"></div>
                                    <img className="img" src={require('./img/the-mountain-biker.jpg')} alt="the-mountain-biker" />
                                </div>
                                <h3><span>The Mountain Biker</span></h3>
                            </div>

                            <div className="card-body">
                                <h4>difficult 4-day tour</h4>
                                <p>Breathing in Nature in America's most spectacular National Parks</p>

                                <div className="card-body-data">
                                    <div className="data">
                                        <i className="fas fa-map-marker-alt" />
                                        <span>Montana, USA</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-calendar" />
                                        <span>July 2021</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-flag" />
                                        <span>5 stops</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-user" />
                                        <span>15 people</span>
                                    </div>
                                </div>

                            </div>

                            <div className="card-footer">
                                <div className="card-footer-details">
                                    <p><span className="value">$597</span> <span className="text">per person</span></p>
                                    <p><span className="value">4.7</span> <span className="text">rating (4)</span></p>
                                </div>
                                <Link to="/tours/the-mountain-biker">
                                    <button className="btn btn-success">Details</button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-6  col-md-6 col-lg-4">
                        <div className="card">

                            <div className="card-header">
                                <div className="card-picture">
                                    <div className="card-picture-overlay"></div>
                                    <img className="img" src={require('./img/nat-7.jpg')} alt="nat-7" />
                                </div>
                                <h3><span>The Snow Adventurer</span></h3>
                            </div>

                            <div className="card-body">
                                <h4>medium 3-day tour</h4>
                                <p>Exciting adventure in the snow with snowboarding and skiing</p>

                                <div className="card-body-data">
                                    <div className="data">
                                        <i className="fas fa-map-marker-alt" />
                                        <span>Colorado, USA</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-calendar" />
                                        <span>March 2021</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-flag" />
                                        <span>3 stops</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-user" />
                                        <span>10 people</span>
                                    </div>
                                </div>

                            </div>

                            <div className="card-footer">
                                <div className="card-footer-details">
                                    <p><span className="value">$1497</span> <span className="text">per person</span></p>
                                    <p><span className="value">4.9</span> <span className="text">rating (5)</span></p>
                                </div>
                                <Link to="/tours/the-snow-adventurer">
                                    <button className="btn btn-success">Details</button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-6  col-md-6 col-lg-4">
                        <div className="card">

                            <div className="card-header">
                                <div className="card-picture">
                                    <div className="card-picture-overlay"></div>
                                    <img className="img" src={require('./img/nat-6.jpg')} alt="nat-6" />
                                </div>
                                <h3><span>The park camper</span></h3>
                            </div>

                            <div className="card-body">
                                <h4>medium 5-day tour</h4>
                                <p>Breathing in Nature in America's most spectacular National Parks</p>

                                <div className="card-body-data">
                                    <div className="data">
                                        <i className="fas fa-map-marker-alt" />
                                        <span>Arizona, USA</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-calendar" />
                                        <span>August 2021</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-flag" />
                                        <span>5 stops</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-user" />
                                        <span>15 people</span>
                                    </div>
                                </div>

                            </div>

                            <div className="card-footer">
                                <div className="card-footer-details">
                                    <p><span className="value">$1997</span> <span className="text">per person</span></p>
                                    <p><span className="value">4.9</span> <span className="text">rating (7)</span></p>
                                </div>
                                <Link to="/tours/the-park-camper">
                                    <button className="btn btn-success">Details</button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-6  col-md-6 col-lg-4">
                        <div className="card">

                            <div className="card-header">
                                <div className="card-picture">
                                    <div className="card-picture-overlay"></div>
                                    <img className="img" src={require('./img/tour-4.jpg')} alt="tour-4" />
                                </div>
                                <h3><span>The city wonderer</span></h3>
                            </div>

                            <div className="card-body">
                                <h4>easy 5-day tour</h4>
                                <p>Living the life of Wanderlust in the US most beatiful cities</p>

                                <div className="card-body-data">
                                    <div className="data">
                                        <i className="fas fa-map-marker-alt" />
                                        <span>NYC, USA</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-calendar" />
                                        <span>September 2021</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-flag" />
                                        <span>6 stops</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-user" />
                                        <span>20 people</span>
                                    </div>
                                </div>

                            </div>

                            <div className="card-footer">
                                <div className="card-footer-details">
                                    <p><span className="value">$2497</span> <span className="text">per person</span></p>
                                    <p><span className="value">4.9</span> <span className="text">rating (6)</span></p>
                                </div>
                                <Link to="/tours/the-city-wonderer">
                                    <button className="btn btn-success">Details</button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-6  col-md-6 col-lg-4">
                        <div className="card">

                            <div className="card-header">
                                <div className="card-picture">
                                    <div className="card-picture-overlay"></div>
                                    <img className="img" src={require('./img/tour-8.jpg')} alt="tour-8" />
                                </div>
                                <h3><span>The Star Gazer</span></h3>
                            </div>

                            <div className="card-body">
                                <h4>medium 9-day tour</h4>
                                <p>The most remote and stunningly beautiful places for seeing the night sky</p>

                                <div className="card-body-data">
                                    <div className="data">
                                        <i className="fas fa-map-marker-alt" />
                                        <span>Utah, USA</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-calendar" />
                                        <span>June 2021</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-flag" />
                                        <span>5 stops</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-user" />
                                        <span>8 people</span>
                                    </div>
                                </div>

                            </div>

                            <div className="card-footer">
                                <div className="card-footer-details">
                                    <p><span className="value">$697</span> <span className="text">per person</span></p>
                                    <p><span className="value">4.5</span> <span className="text">rating (8)</span></p>
                                </div>
                                <Link to="/tours/the-star-gazer">
                                    <button className="btn btn-success">Details</button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-6  col-md-6 col-lg-4">
                        <div className="card">

                            <div className="card-header">
                                <div className="card-picture">
                                    <div className="card-picture-overlay"></div>
                                    <img className="img" src={require('./img/tour-7.jpg')} alt="tour-7" />
                                </div>
                                <h3><span>The Wine Taster</span></h3>
                            </div>

                            <div className="card-body">
                                <h4>easy 7-day tour</h4>
                                <p>Exquisite wines, scenic views, exclusive barrel tastings, and much more</p>

                                <div className="card-body-data">
                                    <div className="data">
                                        <i className="fas fa-map-marker-alt" />
                                        <span>California, USA</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-calendar" />
                                        <span>March 2021</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-flag" />
                                        <span>4 stops</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-user" />
                                        <span>9 people</span>
                                    </div>
                                </div>

                            </div>

                            <div className="card-footer">
                                <div className="card-footer-details">
                                    <p><span className="value">$1897</span> <span className="text">per person</span></p>
                                    <p><span className="value">4.9</span> <span className="text">rating (5)</span></p>
                                </div>
                                <Link to="/tours/the-wine-taster">
                                    <button className="btn btn-success">Details</button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-6  col-md-6 col-lg-4">
                        <div className="card">

                            <div className="card-header">
                                <div className="card-picture">
                                    <div className="card-picture-overlay"></div>
                                    <img className="img" src={require('./img/tour-9.jpg')} alt="tour-9" />
                                </div>
                                <h3><span>The Northern Lights</span></h3>
                            </div>

                            <div className="card-body">
                                <h4>easy 6-day tour</h4>
                                <p>Enjoy the Northern Lights in one of the best places in the world</p>

                                <div className="card-body-data">
                                    <div className="data">
                                        <i className="fas fa-map-marker-alt" />
                                        <span>Alaska, USA</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-calendar" />
                                        <span>February 2021</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-flag" />
                                        <span>2 stops</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-user" />
                                        <span>14 people</span>
                                    </div>
                                </div>

                            </div>

                            <div className="card-footer">
                                <div className="card-footer-details">
                                    <p><span className="value">$1297</span> <span className="text">per person</span></p>
                                    <p><span className="value">4.6</span> <span className="text">rating (7)</span></p>
                                </div>
                                <Link to="/tours/the-northern-lights">
                                    <button className="btn btn-success">Details</button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-6  col-md-6 col-lg-4">
                        <div className="card">

                            <div className="card-header">
                                <div className="card-picture">
                                    <div className="card-picture-overlay"></div>
                                    <img className="img" src={require('./img/tour-1.jpg')} alt="tour-1" />
                                </div>
                                <h3><span>The Forest Hiker</span></h3>
                            </div>

                            <div className="card-body">
                                <h4>medium 14-day tour</h4>
                                <p>Breathtaking hike through the Rocky Mountain National Park</p>

                                <div className="card-body-data">
                                    <div className="data">
                                        <i className="fas fa-map-marker-alt" />
                                        <span>Colorado, USA</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-calendar" />
                                        <span>April 2021</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-flag" />
                                        <span>3 stops</span>
                                    </div>
                                    <div className="data">
                                        <i className="far fa-user" />
                                        <span>20 people</span>
                                    </div>
                                </div>

                            </div>

                            <div className="card-footer">
                                <div className="card-footer-details">
                                    <p><span className="value">$897</span> <span className="text">per person</span></p>
                                    <p><span className="value">4.9</span> <span className="text">rating (5)</span></p>
                                </div>
                                <Link to="/tours/the-forest-hiker">
                                    <button className="btn btn-success">Details</button>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Tours;
