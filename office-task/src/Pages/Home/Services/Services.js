import React from 'react';
import SingleService from '../SingleService/SingleService';
import useServices from './../../../hooks/useServices';

const Services = () => {
    const [services] = useServices()
    return (
        <section className='services py-5'>
            <div className="container">
                <div className="service-title text-center">
                    <h2 className='text-success'>My Services</h2>
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