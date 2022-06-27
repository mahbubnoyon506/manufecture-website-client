import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const review = {
            name: user.displayName,
            email: user.email,
            review: data.review,
            point: data.point
        }
        fetch('https://nameless-falls-03567.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Wow!, Your review successfully posted, Thanks.');
                    reset()
                } else {
                    toast.error('Opps! Something wrong try again.');
                    reset()
                }
            })
    };
    let showErrorMessage;
    if (errors) {
        showErrorMessage = <small className='text-red-500'>{errors.message}</small>
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-2xl text-primary text-center'>Add your review here.</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                value={user.displayName}
                                readOnly
                                className="input input-sm input-bordered w-full max-w-xs focus:outline-0 py-5"
                            />
                            <input
                                type="email"
                                value={user.email}
                                readOnly
                                className="input input-sm input-bordered w-full max-w-xs focus:outline-0 py-5 my-5"
                            />
                            <input
                                type="number"
                                placeholder="What is your review out of five?"
                                className="input input-sm input-bordered w-full max-w-xs focus:outline-0 py-5"
                                {...register('point', {
                                    required: {
                                        value: true,
                                        message: 'Review is required'
                                    },
                                    pattern: {
                                        value: /^[1-5]$/,
                                        message: 'Give rivew between 1 to 5.'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.point?.type === 'required' && <span className="label-text-alt text-red-500">{errors.point.message}</span>}
                                {errors.point?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.point.message}</span>}
                            </label>
                            <textarea
                                type="text"
                                placeholder="Type your review here"
                                className="textarea textarea-bordered w-full max-w-xs focus:outline-0"
                                {...register('review', {
                                    required: {
                                        value: true,
                                        message: 'Review is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                            </label>
                            {showErrorMessage}
                            <input className='btn btn-sm w-full bg-primary text-white border-0' type="submit" value="Add Review" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;