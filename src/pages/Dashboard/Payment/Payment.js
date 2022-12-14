import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../../components/Spinner';
import CheckoutForm from './CheckoutForm';

const pk = process.env.REACT_APP_PK

const stripePromise = loadStripe(pk);

const Payment = () => {
    const product = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h2 className='text-5xl font-bold text-center'>Payment</h2>
            <Helmet>
                <title>MobiHub-Payment</title>
            </Helmet>
            <div className='flex justify-center mt-12'>
                <div className="card w-96 bg-slate-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">{product.name}</h2>
                        <p className='text-center'>Price: <span className='text-red-600 font-bold'>BDT {product.price}</span></p>
                        <hr />
                        <div>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm product={product} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;