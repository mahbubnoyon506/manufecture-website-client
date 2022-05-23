import React from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/UseToken'
import Loader from '../../components/Loader';
import auth from '../../firebase.init';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation();

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    const [token] = useToken(user || googleUser)
    let showErrorMessage;
    let from = location.state?.from?.pathname || "/";
    if (error || googleError) {
        showErrorMessage = <small className='text-red-500'>{error.message || googleError.message}</small>
    }
    if (loading || googleLoading) {
        return <Loader></Loader>;
    }
    
    if (token) {
        navigate(from, { replace: true });
        // navigate('/')
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 className="text-4xl text-seconday text-center">Login</h2>
                    <div class="form-control w-full max-w-xs">

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
                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                        message: 'Password needs at least 8 character with contain a uppercase a lowercase and number.'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                            {showErrorMessage}
                            <input className='btn btn-sm w-full bg-primary text-white border-0' type="submit" value="Login" />
                        </form>
                    </div>
                    <p>Forget password? <Link to='/resetpass'><span className='text-primary'>Reset Password</span></Link></p>
                    <p>Don't have an account? <Link to='/signup'><span className='text-primary'>Create an account</span></Link></p>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-sm btn-outline hover:bg-primary'> <img className='w-4 mr-2' src="https://i.ibb.co/9tw7sWw/google.png" alt="" /> Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;