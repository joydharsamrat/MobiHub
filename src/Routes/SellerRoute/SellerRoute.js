import React, { useContext } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import useSeller from '../../hooks/useSeller';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email)
    const location = useLocation();
    if (loading || isSellerLoading) {
        return <div className='flex items-center justify-center h-screen'>
            <InfinitySpin
                width='200'
                color="#004aad"
            />
        </div>
    }

    if (!user?.uid || !isSeller) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate >
    }
    return children
};

export default SellerRoute;