import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();
    if (loading) {
        return
    }
    if (!user?.uid) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate >
    }
    return children
};

export default PrivateRoute;