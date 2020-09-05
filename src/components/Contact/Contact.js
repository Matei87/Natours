import React from 'react';
import './Contact.css';


class Contact extends React.Component {
    render() {
        return (
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <h3 className="wow animate__animated animate__fadeInRight">Contact</h3>

                        <form className="wow animate__animated animate__fadeInUp">
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" placeholder="Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <textarea name="" id="subject" className="form-control" cols="30" rows="10" placeholder="Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </form>

                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;
