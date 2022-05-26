import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ProfileUpdate = ({ profUser, refetch, setUpdateProfile }) => {
    const {email} = profUser;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const profile = {
            profession: data.profession,
            address: {
                city: data.city,
                state : data.state,
                country: data.country
            },
            phone: data.phone,
            image: data.photo
        }
        fetch(`https://shielded-refuge-26741.herokuapp.com/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(profile)
        })
            .then(res => {
                console.log(res)
               return res.json()})
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Your profile updated');
                    reset()
                    setUpdateProfile('')
                    refetch()
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
        <div>
            <input type="checkbox" id="profModal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="profModal" class="btn btn-sm btn-circle bg-primary text-base-100 absolute right-2 top-2">✕</label>
                    <h2 className='text-xl text-primary text-center py-3'>Update your profile info</h2>
                    <div className='mx-5'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <label class="label">
                                <span class="label-text">What is your Profession?</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Type tour profession'
                                class="input input-sm input-bordered w-full focus:outline-0 py-5"
                                {...register('profession', {
                                    required: {
                                        value: true,
                                        message: 'Prifession is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.profession?.type === 'required' && <span className="label-text-alt text-red-500">{errors.profession.message}</span>}
                            </label>
                        <label class="label">
                                <span class="label-text">What is your City?</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Type Your City'
                                class="input input-sm input-bordered w-full focus:outline-0 py-5"
                                {...register('city', {
                                    required: {
                                        value: true,
                                        message: 'City is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.city?.type === 'required' && <span className="label-text-alt text-red-500">{errors.city.message}</span>}
                            </label>
                        <label class="label">
                                <span class="label-text">What is your State?</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Type Your state'
                                class="input input-sm input-bordered w-full focus:outline-0 py-5"
                                {...register('state', {
                                    required: {
                                        value: true,
                                        message: 'State is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.state?.type === 'required' && <span className="label-text-alt text-red-500">{errors.state.message}</span>}
                            </label>
                        <label class="label">
                                <span class="label-text">What is your Country?</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Type Your country'
                                class="input input-sm input-bordered w-full focus:outline-0 py-5"
                                {...register('country', {
                                    required: {
                                        value: true,
                                        message: 'Country is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.country?.type === 'required' && <span className="label-text-alt text-red-500">{errors.country.message}</span>}
                            </label>
                        <label class="label">
                                <span class="label-text">What is your contact?</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Type Your phone number'
                                class="input input-sm input-bordered w-full focus:outline-0 py-5"
                                {...register('phone', {
                                    required: {
                                        value: true,
                                        message: 'Phone number is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                            </label>
                        <label class="label">
                                <span class="label-text">What is your Photo url?</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Type Your photo url'
                                class="input input-sm input-bordered w-full focus:outline-0 py-5"
                                {...register('photo', {
                                    required: {
                                        value: true,
                                        message: 'Photo url is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.photo?.type === 'required' && <span className="label-text-alt text-red-500">{errors.photo.message}</span>}
                            </label>


                            {showErrorMessage}
                            <input className='btn btn-sm w-full bg-primary text-white border-0' type="submit" value="Update Profile" />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileUpdate;