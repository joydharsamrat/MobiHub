import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import useSeller from '../../hooks/useSeller';

const SellerRoute = ({ children }) => {
    const { user } = useContext(authContext);
    const [isSeller] = useSeller(user?.email)
    const location = useLocation();


    if (!user?.uid || !isSeller) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate >
    }
    return children
};

export default SellerRoute;