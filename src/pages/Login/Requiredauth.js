import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader';
import auth from '../../firebase.init';

const Requiredauth = ({children}) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    
    if(loading){
        return <Loader></Loader>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default Requiredauth;