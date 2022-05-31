import React from 'react';
import SingleService from '../SingleService/SingleService';
import useServices from './../../../hooks/useServices';

const Services = () => {
    const [services] = useServices()
    return (
        <section className='services py-5'>
            <div className="container">
                <div className="service-title text-start">
                    <p className='text-black'>Events</p>
                    <hr />
                    <h2 style={{ color: "#1E0A3C" }}> Events</h2>
                </div>
                <div className="row g-3 pt-4">
                    {
                        services.map(service => <SingleService
                            key={service.id}
                            service={service}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;