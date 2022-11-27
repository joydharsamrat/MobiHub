import React, { useContext, useEffect, useState } from 'react';
import { FcApproval } from "react-icons/fc";
import Booking from '../../components/Booking';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import useSeller from '../../hooks/useSeller';

const ProductsCard = ({ product }) => {
    const [modal, setModal] = useState(false)
    const { user } = useContext(authContext)
    const { sellerName, sellerEmail, name, originalPrice, posted_at, sellingPrice, condition, phone, location, img, purchaseYear, description, status, isadvertised } = product;
    const [isVerified] = useSeller(sellerEmail)
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

    return (
        <div className='my-12'>
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-slate-100 ">
                <figure className='flex justify-center p-16'><img className='w-full' src={img} alt="Album" /></figure>
                <div className="p-5">
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
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold my-3'>Seller info :</h3>
                            <ul>
                                <li className='flex items-center gap-3'>Name: <span className='font-bold'>{sellerName}</span> {isVerified && <span><FcApproval className='text-blue-500'></FcApproval></span>}</li>
                                <li className='text-lg'>Email: <span className='font-bold'>{sellerEmail}</span></li>
                                <li className='text-lg'>Phone: <span className='font-bold'>{phone}</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-actions justify-around">
                        <p>
                            Post date : {
                                posted_at.split('T')[0]
                            }
                        </p>
                        <label onClick={() => setModal(true)} disabled={product.sellerEmail === user.email} htmlFor="booking-modal" className="btn w-1/2 bg-[#004aad]">Book Now</label>

                    </div>
                    {modal && <Booking setModal={setModal} product={product}></Booking>}
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;