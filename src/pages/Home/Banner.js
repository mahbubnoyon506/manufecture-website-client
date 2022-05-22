import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen flex justify-end" style={{ background: `url(https://i.ibb.co/MN4YKk1/how-hompage-banner.webp)`, backgroundRepeat: 'no-repeat' }}>
            <div class="md:mt-[-350px] w-3/4 mr-10">
                <h1 class="mb-5 text-base-100 text-5xl font-semibold text-right">Teamwork: A symphony of sounds and breaking ground</h1>
                <div className='flex justify-end'><button class="btn btn-outline btn-base hover:bg-base hover:text-primary">Get Started</button></div>
            </div>
        </div>
    );
};

export default Banner;