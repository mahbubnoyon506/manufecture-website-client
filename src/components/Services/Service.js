import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, img, price, available, minimum, description } = service;
    return (
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure class="p-5">
                <img src={img} alt="Shoes" class="rounded-xl w-96 h-80" />
            </figure>
            <div class="card-body items-center">
                <h2 class="card-title text-accent">{name}</h2>
                <p className='text-accent text-xl'>Price $ {price}</p>
                <p className='text-accent text-xl'>Available {available} pieces</p>
                <p className='text-accent text-xl'>Minimum order {minimum} pieces</p>
                <p className='text-accent'>{description.slice(0, 100) + '...'}</p>
                <div class="card-actions">
                   <Link to={`/purchase/${_id}`}><button class="btn btn-primary w-screen mb-[-17px]">Buy Now</button></Link> 
                </div>
            </div>
        </div>
    );
};

export default Service;




