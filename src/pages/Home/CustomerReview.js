import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../components/Loader';

const CustomerReview = () => {
    const { data: reviews, isLoading } = useQuery('review', () =>
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h2 className='text-4xl text-primary text-center font-semibold pb-10'>Clients Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10'>

                {
                    reviews.map(review =>
                        <div class="stats shadow" key={review._id}>
                            <div class="stat">
                                <div className='flex justify-between'>
                                    <div class="avatar mb-2">
                                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='block text-primary text-xl'>{review.point} Of</div>
                                        <div class="rating">
                                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-secondary" />
                                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-secondary" />
                                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-secondary" />
                                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-secondary" />
                                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-secondary" checked />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className='text-xl text-accent'>{review.name}</h2>
                                    <p>{review.review}</p>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>


    );
};

export default CustomerReview;