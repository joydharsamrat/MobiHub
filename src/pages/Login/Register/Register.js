import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { authContext } from '../../../context/AuthProvider/AuthProvider';
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
const Register = () => {
    const { createUser, GoogleSignIn } = useContext(authContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [img, setImg] = useState('')
    const imgHostKey = process.env.REACT_APP_ImgBB_Key;
    const handelCreateUser = (data, e) => {
        e.preventDefault()
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const phone = data.phone;
        const role = data.role;
        const user = {
            name,
            email,
            phone,
            role,
            img
        }
        const photo = data.photo[0];
        const formData = new FormData()
        formData.append('image', photo)
        handelHostImg(formData)
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                handelSetUserToDatabase(user)
                e.target.reset()
            })
            .catch(err => console.log(err))

    }

    const handelHostImg = photo => {
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: photo
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    setImg(data.data.url)
                }
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
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('User created successfully')
                }
            })
    }

    return (
        <div className='my-12'>
            <Helmet>
                <title>MobiHub-Register</title>
            </Helmet>
            <div className='flex justify-center'>
                <div className='bg-[#8ecae6] w-full lg:w-[30vw] border shadow-lg rounded-xl h-fit p-5'>
                    <h2 className='text-center text-3xl font-bold text-white'>Register</h2>
                    <form onSubmit={handleSubmit(handelCreateUser)} >
                        <div className="form-control w-full  my-3">
                            <input {...register("name", { required: "Name is required" })} type placeholder="Full Name" className="input input-bordered w-full" />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full  my-3">
                            <input {...register("email", { required: "Email is required" })} type="text" placeholder='Email Address' className="input input-bordered w-full " />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full  my-3">
                            <input {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 8, message: "Password must be at least 8 characters" },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&%*])(?=.*[0-9])/, message: "password must have uppercase,special character and number" }
                                })} type="password" placeholder='Password' className="input input-bordered w-full " />
                            {errors.password && <p className='text-red-600'><small> {errors.password?.message}</small></p>}
                        </div>
                        <div className="form-control w-full my-3">
                            <input {...register("phone", { required: "Phone is required" })} type="text" placeholder='Phone' className="input input-bordered w-full " />
                            {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                        </div>

                        <input type="file"{...register("photo")} placeholder="Your Photo" className="file-input w-full  my-3" />
                        <select {...register("role")} className="select select-bordered w-full  my-3">
                            <option value="seller">Seller</option>
                            <option value="buyer">Buyer</option>
                        </select>
                        <input className='btn bg-[#004aad] w-full my-3 text-xl font-bold' type="submit" />
                    </form>
                    <button onClick={handelGoogleSignIn} className='btn bg-[#004aad] w-full my-3 text-xl font-bold'><FcGoogle></FcGoogle>oo<FcGoogle></FcGoogle>le</button>
                </div>
            </div>
            <div className='text-center my-3'>
                <p>Already have an account ? <Link className='text-blue-600 font-bold' to='/login'>Sign in</Link></p>
            </div>
        </div>
    );
};

export default Register;