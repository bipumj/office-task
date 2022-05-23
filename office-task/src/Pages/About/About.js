import React from 'react';
import CoderImage from '../../images/coder.png'

const About = () => {
    return (
        <section className='blog py-4 py-md-5'>
            <div className="page-title py-4 bg-success text-center">
                <h2 className='text-white'>This is About Me Page</h2>
            </div>
            <div className="container">
                <div className="row pt-5 g-5 align-items-center">

                    {/* Column-1 */}
                    <div className="col-md-6">
                        <div className="about-img p-3 shadow-lg rounded-3">
                            <img src={CoderImage} className='img-fluid' alt="about me" />
                        </div>
                    </div>

                    {/* Column-2 */}
                    <div className=" col-md-6">
                        <div className="about-me">
                            <h3 className='mb-3'>Md Kamrul Hasan</h3>
                            <p className='mb-3'>Every person has a dream or goal. As a human being or person, I have a goal that I will be pro coder. Front-end and Back-end both will be easy for me. I have another goal to do remote job. I am waiting when goal will come true.</p>
                            <p>I always try to do hard work. I am giving my maximum time behid the programing, because i have lots of time behid the programing. If need much time, I will give to acheive my goal.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;