import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';


const SingleService = ({ service }) => {
    const { id, img, name, price, description } = service
    const navigate = useNavigate()
    const handleService = () => {
        navigate('/checkout/' + id)
    }
    return (
        <div className='col-md-4'>
            {/* card start */}
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className='text-center text-md-start'>
                        <Card.Title className='mb-3'>{name}</Card.Title>
                        <h5 className='mb-3 fw-bold'>Price: ${price}</h5>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='bg-primary'>
                        <button onClick={handleService} className="w-100 btn btn-primary">Buy Now</button>
                    </Card.Footer>
                </Card>
            </CardGroup>
            {/* card end */}
        </div>
    );
};

export default SingleService;