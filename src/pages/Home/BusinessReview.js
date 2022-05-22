import React from 'react';

const BusinessReview = () => {
    return (
        <div className='mx-10' >
            <h2 className='text-center text-3xl text-primary uppercase font-bold'>Millions of Clients trust us</h2>
            <h4 className='text-center text-xl text-primary uppercase font-semibold'>Our business status</h4>
            <div class="stats w-full py-10 bg-neutral" >
                <div class="stat">
                    <div class="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div class="stat-title">Our Revenue</div>
                    <div class="stat-value text-primary">145</div>
                    <div class="stat-desc">Billion</div>
                </div>
                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div class="stat-title">Our Target</div>
                    <div class="stat-value text-secondary">300</div>
                    <div class="stat-desc">Billion</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                    </div>
                    <div class="stat-value">86%</div>
                    <div class="stat-title">Target Done</div>
                </div>
            </div>
        </div>

    );
};

export default BusinessReview;