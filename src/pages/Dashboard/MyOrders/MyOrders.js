import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Spinner from '../../../components/Spinner';
import { authContext } from '../../../context/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(authContext)
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['booked'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booked?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    const handelCancelBooking = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/booked?buyerEmail=${user.email}&&productId=${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('Booking canceled')
                }
            })
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='mx-12'>
            <Helmet>
                <title>MobiHub-My-Orders</title>
            </Helmet>
            <h2 className='text-5xl font-bold text-center'>My Orders</h2>
            <div className='my-12'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => <tr key={product._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {product.name}
                                    </td>
                                    <td>BDT {product.price}</td>
                                    <th>
                                        {
                                            product.status === "sold" || product.status === "paid" ? <p className='text-green-400'>{product.status}</p> :
                                                <>
                                                    <Link to={`/dashboard/payment/${product._id}`}><button className="btn bg-green-600 btn-xs border-none">Pay</button></Link>
                                                    <button onClick={() => handelCancelBooking(product._id)} className="btn bg-red-600 btn-xs mx-2 border-none">Cancel</button>
                                                </>
                                        }

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

export default MyOrders;