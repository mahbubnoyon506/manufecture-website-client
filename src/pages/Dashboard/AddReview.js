import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] =useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const review = {
           name: user.displayName,
           email: user.email,
           review: data.review,
           point: data.point
        }
        console.log(review)
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged === true){
               toast.success('Wow!, Your review successfully posted, Thanks.');
               reset()
            }else{
                toast.error('Opps! Something try again.');
                reset()
            }
            console.log(data)
        })
    };
    let showErrorMessage;
    if (errors) {
        showErrorMessage = <small className='text-red-500'>{errors.message}</small>
    }
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Add Review Here</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div class="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                               value={user.displayName}
                               readOnly
                                class="input input-sm input-bordered w-full max-w-xs focus:outline-0"
                            />
                            <input
                                type="email"
                                value={user.email}
                                readOnly
                                class="input input-sm input-bordered w-full max-w-xs focus:outline-0 my-5"
                            />
                            <input
                                type="text"
                                placeholder="Type your review here"
                                class="input input-sm input-bordered w-full max-w-xs focus:outline-0"
                                {...register('review', {
                                    required: {
                                        value: true,
                                        message: 'Review is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                            </label>
                            <input
                                type="number"
                                placeholder="What is your review out of five?"
                                class="input input-sm input-bordered w-full max-w-xs focus:outline-0"
                                {...register('point', {
                                    required: {
                                        value: true,
                                        message: 'Review is required'
                                    },
                                    pattern:{
                                        value: /^[1-5]$/,
                                        message: 'Give rivew between 1 to 5.'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.point?.type === 'required' && <span className="label-text-alt text-red-500">{errors.point.message}</span>}
                                {errors.point?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.point.message}</span>}
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