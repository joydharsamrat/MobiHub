import React, { useContext, useEffect, useState } from 'react';
import { FcApproval } from "react-icons/fc";
import Booking from '../../components/Booking';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import { AiFillFileAdd } from "react-icons/ai";
import toast from 'react-hot-toast';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import SmallSpinner from '../../components/SmallSpinner';
import Spinner from '../../components/Spinner';

const ProductsCard = ({ product }) => {
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const { user } = useContext(authContext)
    const { sellerName, sellerEmail, name, originalPrice, posted_at, sellingPrice, condition, phone, location, img, purchaseYear, description, _id } = product;

    const [isAdmin] = useAdmin(user.email)
    const [productCondition, setProductCondition] = useState("text-red-500");
    useEffect(() => {
        if (condition === "good") {
            setProductCondition("text-green-500")
        }
        else if (condition === "fair") {
            setProductCondition("text-red-500")
        }
        else {
            setProductCondition("text-blue-500")
        }
    }, [condition])

    const { data: seller = [], isLoading } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${sellerEmail}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`,
                }
            })
            const data = res.json()
            return data
        }
    })
    const handelAddToWishlist = () => {
        const wishedProduct = {
            name,
            buyerEmail: user.email,
            productId: _id,
            img,
            price: sellingPrice,
            sellerEmail
        }
        setLoading(true)
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            }
        }

        axios.post(`http://localhost:5000/wishlist`, wishedProduct, headers)
            .then(res => {
                if (res.data.acknowledged) {
                    toast.success('Product Added To Wishlist')
                    setLoading(false)
                }
                else {
                    toast.error(res.data.message)
                    setLoading(false)
                }
            })
            .catch(err => console.log(err))

    }

    const handelReport = () => {
        fetch(`http://localhost:5000/reported/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log()
                if (data.acknowledged) {
                    toast('Product reported successfully')
                }
            })
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='m-12'>
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-slate-100 relative">
                <figure className='flex justify-center p-16'><img className='w-full' src={img} alt="Album" /></figure>
                <div className="p-5 ">
                    <h2 className="text-3xl font-bold text-center my-3">{name}</h2>
                    <hr />
                    <div className='lg:flex justify-around my-5'>
                        <div className='lg:w-1/2'>
                            <h3 className='text-2xl font-bold my-3 '>Product Info</h3>
                            <ul>
                                <li className='text-lg'>originalPrice: BDT<span className='font-bold text-red-500'> {originalPrice}</span></li>
                                <li className='text-lg'>sellingPrice: BDT<span className='font-bold text-red-500'>{sellingPrice}</span></li>
                                <li className='text-lg'>purchaseYear: <span className='font-bold'>{purchaseYear}</span></li>
                                <li className='text-lg'>condition: <span className={`font-bold ${productCondition}`}>{condition}</span></li>
                                <li className='text-lg'>location: <span className='font-bold'>{location}</span></li>
                                <li className='text-lg'>description: <span className='font-bold'>{description}</span></li>
                                <li>
                                    Post date : {
                                        posted_at.split('T')[0]
                                    }
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold my-3'>Seller info :</h3>
                            <ul>
                                <li className='flex items-center gap-3'>Name: <span className='font-bold'>{sellerName}</span> {seller?.verified === "verified" && <span><FcApproval className='text-blue-500'></FcApproval></span>}</li>
                                <li className='text-lg'>Email: <span className='font-bold'>{sellerEmail}</span></li>
                                <li className='text-lg'>Phone: <span className='font-bold'>{phone}</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="card-actions justify-around">
                        <button onClick={handelReport} className='btn btn-error'>Report</button>
                        <label onClick={() => setModal(true)} disabled={product.sellerEmail === user?.email || isAdmin} htmlFor="booking-modal" className="btn w-1/2 bg-[#004aad]">Book Now</label>
                        {
                            !isAdmin && <p className='absolute top-0 right-0 w-fit' title='Add to Wishlist'>{loading ? <SmallSpinner></SmallSpinner> : <AiFillFileAdd onClick={handelAddToWishlist} className='text-[#004aad] text-3xl cursor-pointer'></AiFillFileAdd>}</p>
                        }
                    </div>
                    {modal && <Booking setModal={setModal} product={product}></Booking>}
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;