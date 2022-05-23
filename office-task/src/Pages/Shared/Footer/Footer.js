import React from 'react';

const Footer = () => {
    return (
        <footer className='py-5 bg-success'>
            <div className="container">
                <h3 className='fs-4 text-center mb-0 text-white'>&copy; Learn With Rony || All Rights Reserve By Rony {new Date().getUTCFullYear()}</h3>
            </div>

        </footer>
    );
};

export default Footer;