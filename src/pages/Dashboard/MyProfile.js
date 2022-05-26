import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import Loader from '../../components/Loader';
import ProfileUpdate from './ProfileUpdate';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [updateProfile, setUpdateProfile] = useState(null)
    const url = `https://shielded-refuge-26741.herokuapp.com/user?email=${user.email}`
    const { data: profUser, isLoading, refetch } = useQuery('users', () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loader></Loader>
    }
    // const {image, email, phone, profession, address } = profUser;

    return (
        <div class="hero min-h-screen bg-base-200">

            <div class="hero-content">

                <div class="max-w-md">
                    <div class="avatar">
                        <div class="w-24 rounded-full">
                            <img src={profUser?.image} alt='' />
                            {/* <img src={image} alt="" /> */}
                        </div>
                    </div>
                    <h1 class="text-2xl font-bold">{user?.displayName}</h1>
                    <p class="py-2">Profession: {profUser?.profession}</p>
                    <p class="py-2">State: {profUser?.address?.state} City: {profUser?.address?.city} Country: {profUser?.address?.country} </p>
                    <p class="py-2">Email: {profUser?.email} </p>
                    <p class="py-2">Phone: {profUser?.phone}</p>
                    <div>
                        <div class="tooltip" data-tip="Facebook">
                            <button class="btn btn-sm mx-2"><FaFacebook></FaFacebook></button>
                        </div>
                        <div class="tooltip" data-tip="Twitter">
                            <button class="btn btn-sm mx-2"><FaTwitter></FaTwitter></button>
                        </div>
                        <div class="tooltip" data-tip="Thumbler">
                            <button class="btn btn-sm mx-2"><FaTumblr></FaTumblr></button>
                        </div>
                        <div class="tooltip" data-tip="Linkedin">
                            <button class="btn btn-sm mx-2"><FaLinkedinIn></FaLinkedinIn></button>
                        </div>
                    </div>
                    <div className='my-5'>
                    <label onClick={() => setUpdateProfile(profUser)} for="profModal" class="btn modal-button">Update Profile</label>
                    </div>

                </div>
            </div>
            {
                updateProfile && <ProfileUpdate setUpdateProfile={setUpdateProfile} profUser={profUser} refetch={refetch}></ProfileUpdate>
            }
        </div>
    );
};

export default MyProfile;