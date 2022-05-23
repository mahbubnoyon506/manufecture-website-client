import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useServiceId from '../../hooks/useServiceId';

const Purchase = () => {
    const { id } = useParams();
    const [service] = useServiceId();
    // const [service, setService]= useState(id);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {

    };
    let showErrorMessage;
    if (errors) {
        showErrorMessage = <small className='text-red-500'>{errors.message}</small>
    }

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="text-center lg:text-left">
                        <img src={service.img} alt="" />
                        <h1 class="text-4xl font-bold">{service.name}</h1>
                        <p class="py-2 text-accent text-xl">Product price per unit <span className='text-primary'>${service.price}</span></p>
                        <p class="py-2 text-accent text-xl">Available products in stock <span className='text-primary'>{service.available} pieces.</span></p>
                        <p class="py-2 text-accent text-xl">Minimum order quantity <span className='text-primary'>{service.minimum} pieces.</span></p>
                        <p ><span class="font-semibold">Products Description:</span> {service.description}</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label class="label">
                                    <span class="label-text">What is your Email?</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Type here"
                                    class="input input-sm input-bordered w-full max-w-xs focus:outline-0"
                                    {...register('email', {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                            message: 'Type the right pattern of email.'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                                {/* email field end and password field start */}
                                <label class="label">
                                    <span class="label-text">What is your password?</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Type here"
                                    class="input input-sm input-bordered w-full max-w-xs focus:outline-0"
                                    {...register('password', {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        pattern: {
                                            value: ``,
                                            message: 'Password needs at least 8 character with contain a uppercase a lowercase and number.'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                                {showErrorMessage}
                                <input className='btn btn-sm w-full bg-primary text-white border-0' type="submit" value="Confirm Purchase" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;