import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardGroup } from 'react-bootstrap';

const Checkout = () => {

    const { serviceId } = useParams()
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const service = services.find(service => parseInt(service.id) === parseInt(serviceId))



    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className='col-md-6 offset-md-3'>
                            <div className='shadow-sm' style={{ border: '1px solid lightgrey' }}>
                                {!service ?
                                    <h2 className='text-center py-3'>No Service Here</h2>
                                    :
                                    <div className="row align-items-center">
                                        <div className="col-md-4">
                                            <CardGroup>
                                                <Card>
                                                    <Card.Img variant="top" src={service?.img} />
                                                </Card>
                                            </CardGroup>
                                        </div>
                                        <div className="col-md-8">
                                            <CardGroup>
                                                <Card>
                                                    <Card.Body className='text-center text-md-start'>
                                                        <Card.Title className='mb-3'>{service?.name}</Card.Title>
                                                        <h5 className='mb-3 fw-bold'>Price: <span>$</span>{service?.price}</h5>
                                                    </Card.Body>
                                                </Card>
                                            </CardGroup>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Checkout;