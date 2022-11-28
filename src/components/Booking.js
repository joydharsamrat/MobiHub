import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { authContext } from '../context/AuthProvider/AuthProvider';
import Spinner from './Spinner';

const Booking = ({ product, setModal }) => {
    console.log(product)
    const { user } = useContext(authContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    if (!product) {
        return <Spinner></Spinner>
    }
    else {
        const { sellerEmail, _id, sellingPrice, price, name, img } = product;


        const handelBooking = (data, e) => {
            const product = {
                buyer: user.displayName,
                buyerEmail: user.email,
                seller: sellerEmail,
                productId: _id,
                phone: data.phone,
                location: data.location,
                name,
                price: sellingPrice,
                img
            }
            fetch('http://localhost:5000/booked', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Item Booked')
                        e.target.reset()
                        setModal(false)

                    }
                    else {
                        toast.error(data.message)
                        e.target.reset()
                        setModal(false)
                    }
                })


        }
        return (
            <div>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle bg-[#004aad] absolute right-2 top-2">✕</label>
                        <form onSubmit={handleSubmit(handelBooking)}>
                            <div className="form-control w-full  my-3">
                                <label htmlFor="product">Product</label>
                                <input {...register("product")} id="product" type="text" disabled defaultValue={name} className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full  my-3">
                                <label htmlFor="price">price (BDT)</label>
                                <input {...register("price")} type="text" id='price' disabled defaultValue={sellingPrice ? sellingPrice : price} className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full  my-3">
                                <label htmlFor="buyer">Your Name</label>
                                <input {...register("buyer")} type="text" id='buyer' disabled defaultValue={user?.displayName} className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full  my-3">
                                <label htmlFor="buyerEmail">Your Email</label>
                                <input {...register("buyerEmail")} type="text" id='buyerEmail' disabled defaultValue={user?.email} className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full  my-3">
                                <label htmlFor="phone">Your Phone</label>
                                <input {...register("phone", { required: "Phone is required" })} id='phone' type="number" placeholder='Your Phone' className="input input-bordered w-full " />
                                {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                            </div>
                            <div className="form-control w-full  my-3">
                                <label htmlFor="location">Meeting Location</label>
                                <input {...register("location", { required: "Location is required" })} id='location' type="text" placeholder='Meeting location' className="input input-bordered w-full " />
                                {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                            </div>
                            <input className='btn bg-[#004aad] w-full my-3 text-xl font-bold' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default Booking;