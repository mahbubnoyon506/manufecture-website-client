import React from 'react';

const Service = ({ service }) => {
    const { name, img, price, available, minimum, description } = service;
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
                    <button class="btn btn-primary w-screen mb-[-17px]">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;




