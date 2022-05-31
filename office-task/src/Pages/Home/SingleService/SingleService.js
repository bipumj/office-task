import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';


const SingleService = ({ service }) => {
    const { id, img, name, time, price, location } = service
    const navigate = useNavigate()
    const handleService = () => {
        navigate('/checkout/' + id)
    }
    return (
        <div className='col-md-3'>
            {/* card start */}
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className='text-center border-0 text-md-start'>
                        <Card.Title className='mb-2' style={{ color: "#39364F" }}>{name}</Card.Title>
                        <Card.Text style={{ color: "#D84628" }} >{time}</Card.Text>
                        <p style={{ color: "#737287" }}>{location}</p>
                        <p className='mb-3' style={{ color: "#737287" }}>{price}</p>
                        {/* <Card.Text>
                            {price}
                        </Card.Text> */}
                    </Card.Body>
                    {/* <Card.Footer className='bg-primary'>
                        <button onClick={handleService} className="w-100 btn btn-primary">Buy Now</button>
                    </Card.Footer> */}
                </Card>
            </CardGroup>
            {/* card end */}
        </div>
    );
};

export default SingleService;