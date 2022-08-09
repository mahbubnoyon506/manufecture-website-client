import React from 'react';
import { Link } from 'react-router-dom';

const MiddleSec = () => {

    return (
        <section>
            <div className='mx-10 pt-10 mt-[-180px]' >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>
                    <div className="hero min-h-screen flex justify-starts sm:mb-[-200px]" style={{ background: `url(https://i.ibb.co/vXtvYYV/ultimate.webp)`, backgroundRepeat: 'no-repeat' }}>
                        <div className=" w-3/4 ml-8">
                            <h1 className="mb-2 text-base-100 text-2xl font-semibold text-left">Targeted, In-Crop Spraying</h1>
                            <Link to='#'><h1 className="mb-5 text-secondary text-md font-semibold text-left w-3/4">Learn more about advanced spraying technology </h1>  </Link>
                        </div>
                    </div>
                    <div className="hero min-h-screen flex justify-starts sm:mb-[-160px]" style={{ background: `url(https://i.ibb.co/KNPHkNW/run-with-us-image-panel.webp)`, backgroundRepeat: 'no-repeat' }}>
                        <div className="mt-[-450px] w-3/4 ml-8">
                            <h1 className="mb-2 text-base-100 text-2xl font-semibold text-left">There are millions of ways <br />to make the most of your land</h1>
                            <Link to='#'><h1 className="mb-5 text-secondary text-md font-semibold text-left w-3/4">See how the folks who run with us do it</h1>  </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MiddleSec;