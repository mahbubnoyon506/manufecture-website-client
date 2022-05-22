import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loader from '../../components/Loader'
import auth from '../../firebase.init';
// import { toast } from 'react-toastify';

const ResetPass = () => {
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        await sendPasswordResetEmail(data.email);
        reset()
        // toast.success('Password reset link send on this email.')
    };
    let showErrorMessage;
    if (resetError) {
        showErrorMessage = <small className='text-red-500'>{resetError.message }</small>
    }
    if ( sending) {
        return <Loader></Loader>;
    }

    return (

        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 className="text-4xl text-seconday text-center">Reset Password</h2>
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
                            {showErrorMessage}
                            <input className='btn btn-sm w-full bg-secondary text-white border-0' type="submit" value="Reset" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPass;