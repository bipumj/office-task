import React from 'react';

const Footer = () => {
    return (
        <footer className='py-5 bg-success' style={{ color: "red" }}>

            <div className="container">
                <h3 className='fs-5 text-center mb-0 text-white'>&copy; The Postman24 || {new Date().getUTCFullYear()}</h3>
            </div>

        </footer>
    );
};

export default Footer;