import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const product = useLoaderData()
    return (
        <div>
            <h2 className='text-5xl font-bold text-center'>Payment</h2>
            <div className='flex justify-center mt-12'>
                <div className="card w-96 bg-slate-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">{product.name}</h2>
                        <p className='text-center'>Price: <span className='text-red-600 font-bold'>BDT {product.price}</span></p>
                        <hr />
                        <div className="card-actions justify-center">
                            <button className="btn bg-[#004aad]">Pay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;