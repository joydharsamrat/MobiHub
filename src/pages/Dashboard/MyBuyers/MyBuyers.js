import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Spinner from '../../../components/Spinner';
import { authContext } from '../../../context/AuthProvider/AuthProvider';

const MyBuyers = () => {
    const { user } = useContext(authContext);
    const { data: buyers = [], isLoading } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/payments?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='mx-12'>
            <Helmet>
                <title>MobiHub-My-Buyers</title>
            </Helmet>
            <h2 className='text-5xl font-bold text-center'>My Orders</h2>
            <div className='my-12'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Product</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                buyers.map(buyer => <tr key={buyer._id}>
                                    <td>
                                        {buyer.buyer}
                                    </td>
                                    <td>
                                        {buyer.buyerEmail}
                                    </td>
                                    <td> {buyer.product}</td>
                                    <th>

                                        BDT {buyer.price}
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBuyers;