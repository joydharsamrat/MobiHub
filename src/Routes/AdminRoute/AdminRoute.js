import React, { useContext } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <div className='flex items-center justify-center h-screen'>
            <InfinitySpin
                width='200'
                color="#004aad"
            />
        </div>
    }

    if (!user?.uid || !isAdmin) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate >
    }
    return children
};

export default SellerRoute;