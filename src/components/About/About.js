import React from 'react';
import './About.css';


class About extends React.Component {
    render() {
        return (
            <section id="about">
                <div className="container-fluid">
                    <div className="row">
                        <h3 className="wow animate__animated animate__fadeInRight">Travel with us</h3>
                        <div className="about-features">

                            <div className="features">
                                <i className="fas fa-route wow animate__animated animate__flipInY" />
                                <h4 className="wow animate__animated animate__fadeInUp">Travel to unknown paths</h4>
                                <p className="wow animate__animated animate__fadeInUp animate__delay-1s">Discover new paths across beautifull landscapes of US</p>
                            </div>

                            <div className="features">
                                <i className="fas fa-mountain wow animate__animated animate__flipInY" />
                                <h4 className="wow animate__animated animate__fadeInUp">Explore mountains</h4>
                                <p className="wow animate__animated animate__fadeInUp animate__delay-1s">Difficult roads often lead to beautiful destinations</p>
                            </div>

                            <div className="features">
                                <i className="fas fa-city wow animate__animated animate__flipInY" />
                                <h4 className="wow animate__animated animate__fadeInUp">Discover Cities</h4>
                                <p className="wow animate__animated animate__fadeInUp animate__delay-1s">Escape and breathe the air of new places</p>
                            </div>

                            <div className="features">
                                <i className="fas fa-globe-americas wow animate__animated animate__flipInY" />
                                <h4 className="wow animate__animated animate__fadeInUp">Search new places</h4>
                                <p className="wow animate__animated animate__fadeInUp animate__delay-1s">Explore the next chapter of your life</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default About;
