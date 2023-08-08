import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../../context/AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import useToken from '../../../hooks/useToken';
import SmallSpinner from '../../../components/SmallSpinner';

const Login = () => {
    const [loading, setLoading] = useState(false)
    const { logIn, GoogleSignIn } = useContext(authContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true })
    }


    const handelLogin = (data, e) => {
        setLoading(true)
        const email = data.email;
        const password = data.password;
        logIn(email, password)
            .then(result => {
                console.log(result.user)
                setCreatedUserEmail(email)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }

    const handelGoogleSignIn = () => {
        GoogleSignIn()
            .then(result => {
                console.log(result.user)
                const user = {
                    name: result.user.displayName,
                    email: result.user.email,
                    img: result.user.photoURL,
                    role: "buyer"
                }
                handelSetUserToDatabase(user)

            })
            .catch(err => console.log(err))
    }

    const handelSetUserToDatabase = (user) => {
        fetch('https://mobihub-server.vercel.app/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLoading(false)
                setCreatedUserEmail(user.email)
            })
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
                            <input {...register("email", { required: "Email is required" })} type="email" placeholder='Email Address' className="input input-bordered w-full " />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full  my-3">
                            <input {...register("password", { required: "Password is required" })} type="password" placeholder='Password' className="input input-bordered w-full " />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        {loading ? <p className='flex justify-center'><SmallSpinner></SmallSpinner></p> : <input className='btn bg-[#004aad] w-full my-3 text-xl font-bold' type="submit" />}
                    </form>
                    <button onClick={handelGoogleSignIn} className='btn bg-[#004aad] w-full my-3 text-xl font-bold'><FcGoogle></FcGoogle>oo<FcGoogle></FcGoogle>le</button>
                </div>
            </div>
            <div className='text-center my-3'>
                <p>New to MobiHub ? <Link className='text-blue-600 font-bold' to='/register'>register</Link></p>
            </div>
        </div>
    );
};

export default Login;