import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { authContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(authContext)
    return (
        <>
            <Helmet>
                <title>MobiHub-Register</title>
            </Helmet>
            <div>

            </div>
        </>
    );
};

export default Register;