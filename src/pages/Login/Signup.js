import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import useToken from '../../hooks/UseToken';

const Signup = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async(data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({displayName: data.name})
    };

    const [token] = useToken(user || googleUser)

    let showErrorMessage;
    if (error || googleError || updateError) {
        return (
            showErrorMessage = <small className='text-red-500'>{error.message || googleError.message || updateError.message}</small>
        );
    }
    if (loading || googleLoading || updating) {
        return <Loader></Loader>;
    }
    let from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-4xl text-seconday text-center">Sign Up</h2>
                    <div className="form-control w-full max-w-xs">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="label">
                                <span className="label-text">What is your name?</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-sm input-bordered w-full max-w-xs focus:outline-0"
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                            {/* name field end and email field start */}
                            <label className="label">
                                <span className="label-text">What is your Email?</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Type here"
                                className="input input-sm input-bordered w-full max-w-xs focus:outline-0"
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
                            <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span> }
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span> }
                            </label>
                            {/* email field end and password field start */}
                            <label className="label">
                                <span className="label-text">What is your password?</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Type here"
                                className="input input-sm input-bordered w-full max-w-xs focus:outline-0"
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                        message: 'Password needs at least 8 character with contain a uppercase a lowercase and number.'
                                    }
                                })}
                            />
                            <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span> }
                            {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span> }
                            </label>
                            {showErrorMessage}
                            <input className='btn btn-sm w-full bg-primary text-white border-0' type="submit" value="Sign Up" />
                        </form>
                    </div>
                    <p>Already have account? <Link to='/login'><span className='text-primary'>Login</span></Link></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-sm btn-outline hover:bg-primary'> <img className='w-4 mr-2' src="https://i.ibb.co/9tw7sWw/google.png" alt="" /> Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;