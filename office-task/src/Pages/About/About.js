import React from 'react';
import CoderImage from '../../images/coder.png'

const About = () => {
    return (
        <section className='blog py-4 py-md-5'>
            <div className="page-title py-4 text-center">
                <h2 className='text-black'>This is Organize Page</h2>
            </div>
            <div className="container">
                <div className="row pt-5 g-5 align-items-center">

                    {/* Column-1 */}
                    <div className="col-md-12">
                        <div className="about-img p-3 shadow-lg rounded-3">
                            <img src={CoderImage} className='img-fluid' alt="about me" />
                        </div>
                    </div>

                    {/* Column-2 */}
                    <div className=" col-md-6">
                        <div className="about-me">
                            <h3 className='mb-3'>Title</h3>
                            <p className='mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate non nostrum molestiae, saepe aspernatur eaque provident corrupti voluptatem libero accusamus harum officiis nihil cumque quam quia praesentium. Ducimus delectus exercitationem accusantium repellat iste vero sequi autem! Inventore modi recusandae molestias porro provident rerum commodi repellendus ad. Labore voluptatum aliquid eos ipsa, magnam asperiores provident aspernatur quas dignissimos a, corrupti voluptates illo cumque harum sequi in possimus quae libero rem accusantium. Veniam expedita ipsa, obcaecati delectus alias modi voluptatem in, sequi doloribus maxime natus, ipsam non ratione magni ducimus. Tenetur sed laudantium sapiente illo iure non quisquam asperiores praesentium eveniet facere!</p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;