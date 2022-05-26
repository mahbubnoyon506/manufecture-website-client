import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Service = ({ service }) => {
    const { _id, name, img, price, available, minimum, description } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="p-5">
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <img src={img} alt="Shoes" className="rounded-xl w-96 h-80" />
                </div>

            </figure>
            <div className="card-body items-center">
                <h2 className="card-title text-accent">{name}</h2>
                <p className='text-accent text-xl'>Price $ {price}</p>
                <p className='text-accent text-xl'>Available {available} pieces</p>
                <p className='text-accent text-xl'>Minimum order {minimum} pieces</p>
                <p className='text-accent'>{description.slice(0, 100) + '...'}</p>
                <div data-aos="zoom-in">
                <div className="card-actions">
                    <Link to={`/purchase/${_id}`}><button className="btn btn-primary w-screen mb-[-20px]">Buy Now</button></Link>
                </div>
                </div>

            </div>
        </div>
    );
};

export default Service;




