import React from 'react';
import { Table } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <section className='blog py-4 py-md-5'>
            <div className="page-title py-4 bg-success text-center">
                <h2 className='text-white'>This is Blog Page</h2>
            </div>
            <div className="container">
                <div className="row pt-5 g-3">

                    {/* Column-1 */}
                    <div className="col-lg-4 col-md-6">

                        <div className="shadow-sm blog-content ">
                            {/* Question */}
                            <h4 className='fw-normal mb-3 text-center text-md-start'>Difference between authorization and authentication</h4>

                            {/* Table */}
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Authentication</th>
                                        <th>Authorization</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Authentication confirms the identity of the user.</td>
                                        <td>What resources a user has access to is determined by authorization.</td>
                                    </tr>
                                    <tr>
                                        <td>Passwords, one-time pins, biometric information, and other information given or inputted by the user are used for authentication.</td>
                                        <td>Authorization is controlled by the organization's settings, which it implements and maintains.</td>
                                    </tr>
                                    <tr>
                                        <td>The first step in a successful identity and access management strategy is authentication.</td>
                                        <td>Authentication is always followed by authorization.</td>
                                    </tr>
                                    <tr>
                                        <td>Authentication is visible to and partially changeable by the user.</td>
                                        <td>The user has no visibility into or control over authorization.</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>

                    </div>

                    {/* Column-2 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="shadow-sm blog-content">
                            {/* Question */}
                            <h4 className='fw-normal mb-3 text-center text-md-start'>Why are you using firebase? What other options do you have to implement authentication?</h4>
                            <div className="answer-part">
                                <p className='mb-3'>Generally, I use firebase for authentication of my website. I also host my website in firebase host.</p>
                                <p >I have some alternatives of firebase:
                                    <ul>
                                        <li>Back4App</li>
                                        <li>Parse</li>
                                        <li>AWS Amplify</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column-3 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="shadow-sm blog-content">
                            {/* Question */}
                            <h4 className='fw-normal mb-3 text-center text-md-start'>What other services does firebase provide other than authentication</h4>
                            <div className="answer-part">
                                <p >Other services of firebase:
                                    <ul>
                                        <li>Firebase Database</li>
                                        <li>Firebase Hosting</li>
                                        <li>Firebase Cloud Messaging</li>
                                        <li>Firebase Remote Config</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;