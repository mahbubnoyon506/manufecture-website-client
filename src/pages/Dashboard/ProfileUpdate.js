import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ProfileUpdate = ({ profUser, refetch, setUpdateProfile }) => {
    const [user] = useAuthState(auth);
    const { email } = profUser;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {

        const imageStoreKey = 'f2b9b9d7c6cda77e9468dc94c735cfc4';

        const image = data.image[0];
        console.log(image)
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                const imageUrl = result.data.url;
                console.log(imageUrl);

                const profile = {
                    name: user.displayName,
                    email: user.email,
                    profession: data.profession,
                    address: {
                        city: data.city,
                        state: data.state,
                        country: data.country
                    },
                    phone: data.phone,
                    image: imageUrl
                }
                console.log(profile)

                fetch(`https://nameless-falls-03567.herokuapp.com/profiles/${email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(profile)
                })
                    .then(res => {
                        console.log(res)
                        return res.json()
                    })
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
            })
    };
    let showErrorMessage;
    if (errors) {
        showErrorMessage = <small className='text-red-500'>{errors.message}</small>
    }

    return (
        <div>
            <input type="checkbox" id="profModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label for="profModal" className="btn btn-sm btn-circle bg-primary text-base-100 absolute right-2 top-2">✕</label>
                    <h2 className='text-xl text-primary text-center py-3'>Update your profile info</h2>
                    <div className='mx-5'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                value={user.displayName}
                                readOnly
                                className="input input-sm input-bordered w-full focus:outline-0 py-5"
                            />
                            <input
                                type="text"
                                value={user.email}
                                readOnly
                                className="input input-sm input-bordered w-full focus:outline-0 py-5 mt-5"
                            />
                            <label className="label">
                                <span className="label-text">What is your Profession?</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Type tour profession'
                                className="input input-sm input-bordered w-full focus:outline-0 py-5"
                                {...register('profession', {
                                    required: {
                                        value: true,
                                        message: 'Prifession is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.profession?.type === 'required' && <span className="label-text-alt text-red-500">{errors.profession.message}</span>}
                            </label>
                            <label className="label">
                                <span className="label-text">What is your City?</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Type Your City'
                                className="input input-sm input-bordered w-full focus:outline-0 py-5"
                                {...register('city', {
                                    required: {
                                        value: true,
                                        message: 'City is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.city?.type === 'required' && <span className="label-text-alt text-red-500">{errors.city.message}</span>}
                            </label>
                            <label className="label">
                                <span className="label-text">What is your State?</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Type Your state'
                                className="input input-sm input-bordered w-full focus:outline-0 py-5"
                                {...register('state', {
                                    required: {
                                        value: true,
                                        message: 'State is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.state?.type === 'required' && <span className="label-text-alt text-red-500">{errors.state.message}</span>}
                            </label>
                            <label className="label">
                                <span className="label-text">What is your Country?</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Type Your country'
                                className="input input-sm input-bordered w-full focus:outline-0 py-5"
                                {...register('country', {
                                    required: {
                                        value: true,
                                        message: 'Country is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.country?.type === 'required' && <span className="label-text-alt text-red-500">{errors.country.message}</span>}
                            </label>
                            <label className="label">
                                <span className="label-text">What is your contact?</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Type Your phone number'
                                className="input input-sm input-bordered w-full focus:outline-0 py-5"
                                {...register('phone', {
                                    required: {
                                        value: true,
                                        message: 'Phone number is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                            </label>
                            <label className="label">
                                <span className="label-text">What is your Photo url?</span>
                            </label>
                            <input
                                type="file"
                                placeholder='Type Your photo url'
                                className="input input-sm cursor-pointer focus:outline-0 mb-3 pb-2"
                                {...register('image', {
                                    required: {
                                        value: true,
                                        message: 'Photo url is required'
                                    }
                                })}
                            />
                            <label className="label">
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