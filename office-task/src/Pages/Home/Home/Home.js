import React from 'react';
import './Home.css'
import Services from './../Services/Services';
import ContactImage from '../../../images/contact.png'
import { Button, Form } from 'react-bootstrap';
import { FaApple, FaFacebookF } from "react-icons/fa";


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
                        <div className="me-5">
                            <div className="banner-content  text-center shadow-sm align-center">
                                <h2 style={{ color: "#1E0A3C", fontSize: "52px" }} className='mb-3 fw-bolder text-capitalize'>North Bangla
                                    <br />
                                    <span style={{ color: "#1E0A3C" }}>Foundation</span></h2>
                                <h6 style={{ color: "#6F7287" }} >Hosted by 17 events</h6>
                                <h6 style={{ color: "#6F7287" }} >500 followers</h6>
                                <Button variant="outline-primary" className='mt-2 px-3 ' >Follow</Button>
                                <p style={{ color: "#6F7287" }} className='mt-2 px-5'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque, consequatur quod aliquid, asperiores sint dolor magni voluptates, veritatis vel quo ab dignissimos autem perspiciatis placeat molestias? Esse modi ea numquam animi maxime obcaecati perferendis nemo, ullam nam, illum suscipit saepe quod, facilis laudantium explicabo quam rerum odio ut nobis?
                                </p>
                                <div className='d-flex mt-3 text-center'>
                                    <FaFacebookF className='facebook-icon me-5' />
                                    <FaApple className='apple-icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service section */}
            <Services></Services>

            {/* Contact section */}
            <section className='contact pb-5'>
                {/* <div className="container">
                    <div className="service-title text-center">
                        <h2 className='text-success'>Contact with us</h2>
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
                </div> */}
            </section>
        </main>
    );
};

export default Home;