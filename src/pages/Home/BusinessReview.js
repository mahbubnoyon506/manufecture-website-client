import React from 'react';

const BusinessReview = () => {
    return (
        <div className='mx-10 mb-20' >
            <h2 className='text-center text-3xl text-primary uppercase font-bold pt-20'>Millions of Clients trust us</h2>
            <h4 className='text-center text-xl text-primary uppercase font-semibold py-5'>Our business status</h4>
            <div class="stats shadow-2xl w-full">
                <div class="stat place-items-center">
                    <div class="stat-title">Our Revenue</div>
                    <div class="stat-value">145+</div>
                    <div class="stat-desc">Billion</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">Our Target</div>
                    <div class="stat-value text-primary">300+</div>
                    <div class="stat-desc text-primary">Billion</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">Achievement </div>
                    <div class="stat-value">60%</div>
                    <div class="stat-desc">Reached</div>
                </div>
            </div>
        </div>

    );
};

export default BusinessReview;