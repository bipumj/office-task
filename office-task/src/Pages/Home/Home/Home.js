import React from 'react';
import './Home.css'
import Services from './../Services/Services';
import ContactImage from '../../../images/contact.png'
import { Button, Form } from 'react-bootstrap';

const Home = () => {
    const handleForm = (event) => {
        event.preventDefault()
    }

    return (
        <main>
            {/* Banner section */}
            <section className="banner py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="banner-content shadow-sm align-middle">
                                <h2 className='mb-3 text-capitalize'>Learn & Grow your career with <span className='text-success'>Rony</span></h2>
                                <h6 className='fst-italic text-primary'>Make Your Dream True</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service section */}
            <Services></Services>

            {/* Contact section */}
            <section className='contact pb-5'>
                <div className="container">
                    <div className="service-title text-center">
                        <h2 className='text-success'>Contact Me</h2>
                    </div>
                    <div className="row pt-4 g-3 align-items-center">
                        <div className="col-md-5 ">
                            <div className="contact-img shadow-lg rounded-3">
                                <img src={ContactImage} className='img-fluid' alt="contact img" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="contact-content">
                                <Form onSubmit={handleForm}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Enter your name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Control type="email" placeholder="Enter your email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <textarea className='form-control' rows="5" placeholder='Enter your message'></textarea>
                                    </Form.Group>


                                    <div className='text-center mt-4'>
                                        <Button variant="primary" className='w-md-25' type="submit">
                                            Contact Me
                                        </Button>
                                    </div>

                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;