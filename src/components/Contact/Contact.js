import React from 'react';
import './Contact.css';


class Contact extends React.Component {
    render() {
        return (
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <h3 className="wow animate__animated animate__fadeInRight">Contact</h3>

                        <div className="col-md-10 col-lg-7">
                            <form className="wow animate__animated animate__fadeInUp">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="email@example.com" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Enter message</label>
                                    <textarea name="" id="subject" className="form-control" cols="30" rows="10" placeholder="Message" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </form>
                        </div>


                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;
