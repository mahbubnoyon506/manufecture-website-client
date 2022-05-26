import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, img, price, available, minimum, description } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="p-5">
                <img src={img} alt="Shoes" className="rounded-xl w-96 h-80" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title text-accent">{name}</h2>
                <p className='text-accent text-xl'>Price $ {price}</p>
                <p className='text-accent text-xl'>Available {available} pieces</p>
                <p className='text-accent text-xl'>Minimum order {minimum} pieces</p>
                <p className='text-accent'>{description.slice(0, 100) + '...'}</p>
                <div className="card-actions">
                   <Link to={`/purchase/${_id}`}><button className="btn btn-primary w-screen mb-[-20px]">Buy Now</button></Link> 
                </div>
            </div>
        </div>
    );
};

export default Service;




