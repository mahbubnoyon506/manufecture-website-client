import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen flex justify-end" style={{ background: `url(https://i.ibb.co/MN4YKk1/how-hompage-banner.webp)`, backgroundRepeat: 'no-repeat' }}>
            <div className="mt-[-350px] w-3/4 mr-10 ">
                <h1 className=" mb-5 text-base-100 text-5xl font-semibold text-right">Teamwork: A symphony of sounds and breaking ground</h1>
                <div className='flex justify-end'><button className="btn btn-outline text-base-100  hover:bg-base-100 hover:text-primary">Get Started</button></div>
            </div>
        </div>
    );
};

export default Banner;