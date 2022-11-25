import React, { useEffect, useState } from 'react';
import { FcApproval } from "react-icons/fc";
import useSeller from '../../hooks/useSeller';

const ProductsCard = ({ product }) => {

    const { sellerName, sellerEmail, name, originalPrice, sellingPrice, condition, phone, location, img, purchaseYear, description, status, isadvertised } = product;
    const [isVerified] = useSeller(sellerEmail)

    return (
        <div>
            <div className="card lg:card-side bg-slate-100 lg:h-[80vh]">
                <figure><img className='h-full w-full' src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center">{name}</h2>
                    <div className='flex justify-around my-5'>
                        <div>
                            <h3 className='text-2xl font-bold my-3'>Product Info</h3>
                            <ul>
                                <li className='text-lg'>originalPrice: <span className='font-bold'> {originalPrice}</span></li>
                                <li className='text-lg'>sellingPrice: <span className='font-bold'>{sellingPrice}</span></li>
                                <li className='text-lg'>purchaseYear: <span className='font-bold'>{purchaseYear}</span></li>
                                <li className='text-lg'>condition: <span className='font-bold'>{condition}</span></li>
                                <li className='text-lg'>location: <span className='font-bold'>{location}</span></li>
                                <li className='text-lg'>description: <span className='font-bold'>{description}</span></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold my-3'>Seller info :</h3>
                            <ul>
                                <li className='flex items-center gap-3'>Name: {sellerName} {isVerified && <span><FcApproval className='text-blue-500'></FcApproval></span>}</li>
                                <li className='text-lg'>Name: {sellerEmail}</li>
                                <li className='text-lg'>Name: {phone}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#004aad]">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;