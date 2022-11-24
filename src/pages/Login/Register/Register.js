import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { authContext } from '../../../context/AuthProvider/AuthProvider';
import { useForm } from "react-hook-form";

const Register = () => {
    const { createUser } = useContext(authContext)
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
        const photo = data.photo[0];
        const formData = new FormData()
        formData.append('image', photo)
        handelHostImg(formData)
        createUser(email, password)
            .then(result => {
                console.log(result.user)
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

    return (
        <div className='my-12'>
            <Helmet>
                <title>MobiHub-Register</title>
            </Helmet>
            <div className='flex justify-center'>
                <div className='bg-[#8ecae6] w-full lg:w-[30vw] border shadow-lg rounded-xl h-fit my-12 p-5'>
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
                            <input {...register("password", { required: "Password is required" })} type="password" placeholder='Password' className="input input-bordered w-full " />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
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
                    <button className='btn bg-[#004aad] w-full my-3 text-xl font-bold' >Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;