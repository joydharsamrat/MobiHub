import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <Spinner></Spinner>
    }

    if (!user?.uid || !isAdmin) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate >
    }
    return children
};

export default SellerRoute;