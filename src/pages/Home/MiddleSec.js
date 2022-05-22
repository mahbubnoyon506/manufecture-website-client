import React from 'react';
import { Link } from 'react-router-dom';

const MiddleSec = () => {

    return (
        <section>
            <div className='mx-10'>
                <div className='grid grid-cols-2 gap-10'>
                    <div class="hero min-h-screen flex justify-starts" style={{ background: `url(https://i.ibb.co/vXtvYYV/ultimate.webp)`, backgroundRepeat: 'no-repeat' }}>
                        <div class=" w-3/4 ml-8">
                            <h1 class="mb-2 text-base-100 text-2xl font-semibold text-left">Targeted, In-Crop Spraying</h1>
                            <Link to='#'><h1 class="mb-5 text-secondary text-md font-semibold text-left w-3/4">Learn more about advanced spraying technology </h1>  </Link>
                        </div>
                    </div>
                    <div class="hero min-h-screen flex justify-starts" style={{ background: `url(https://i.ibb.co/KNPHkNW/run-with-us-image-panel.webp)`, backgroundRepeat: 'no-repeat' }}>
                        <div class="mt-[-450px] w-3/4 ml-8">
                            <h1 class="mb-2 text-base-100 text-2xl font-semibold text-left">There are millions of ways <br />to make the most of your land</h1>
                            <Link to='#'><h1 class="mb-5 text-secondary text-md font-semibold text-left w-3/4">See how the folks who run with us do it</h1>  </Link>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-10 mt-[-180px]'>
                    <div class="hero min-h-screen flex justify-starts" style={{ background: `url(https://i.ibb.co/4fPQNGt/350-p-tier-excavator.webp)`, backgroundRepeat: 'no-repeat' }}>
                        <div class="mt-[-450px] w-3/4 ml-8">
                            <h1 class="mb-2 text-base-100 text-2xl font-semibold text-left">P-Tier Excavators are Here</h1>
                            <Link to='#'><h1 class="mb-5 text-secondary text-md font-semibold text-left w-3/4">Take your operation to the next level</h1>  </Link>
                        </div>
                    </div>
                    <div class="hero min-h-screen flex justify-starts" style={{ background: `url(https://i.ibb.co/xXdYRFg/own-it-offer-homepage.webp)`, backgroundRepeat: 'no-repeat' }}>
                        <div class=" w-3/4 ml-8">
                            <h1 class="mb-2 text-base-100 text-2xl font-semibold text-left">Complete Your Fleet</h1>
                            <Link to='#'><h1 class="mb-5 text-base-100 text-md font-semibold text-left w-3/4">Get special savings on select equipment with the Own It Offer</h1>  </Link>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    );
};

export default MiddleSec;