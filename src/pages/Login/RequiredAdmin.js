import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const RequiredAdmin = ({children}) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
    
    if(loading || adminLoading){
        return <Loader></Loader>
    }
    if(!user || !admin){
        signOut(auth);
        localStorage.removeItem('accessToken')
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>  
    }
    return children;
};

export default RequiredAdmin;