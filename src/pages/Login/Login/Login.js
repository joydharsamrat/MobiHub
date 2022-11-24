import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { authContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { logIn } = useContext(authContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handelLogin = (data, e) => {
        const email = data.email;
        const password = data.password;
        logIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='my-12'>
            <Helmet>
                <title>MobiHub-Login</title>
            </Helmet>
            <div className='flex justify-center'>
                <div className='bg-[#8ecae6] w-full lg:w-[30vw] border shadow-lg rounded-xl h-fit  p-5'>
                    <h2 className='text-center text-3xl font-bold text-white'>Sign In</h2>
                    <form onSubmit={handleSubmit(handelLogin)}>
                        <div className="form-control w-full  my-3">
                            <input {...register("email", { required: "Email is required" })} type="text" placeholder='Email Address' className="input input-bordered w-full " />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full  my-3">
                            <input {...register("password", { required: "Password is required" })} type="password" placeholder='Password' className="input input-bordered w-full " />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <input className='btn bg-[#004aad] w-full my-3 text-xl font-bold' type="submit" />
                    </form>
                </div>
            </div>
            <div className='text-center my-3'>
                <p>New to MobiHub ? <Link className='text-blue-600 font-bold' to='/register'>register</Link></p>
            </div>
        </div>
    );
};

export default Login;