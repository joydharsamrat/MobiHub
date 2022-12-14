import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { authContext } from '../../../context/AuthProvider/AuthProvider';
import Spinner from '../../../components/Spinner'
import toast from 'react-hot-toast';
import SmallSpinner from '../../../components/SmallSpinner';
import { Helmet } from 'react-helmet-async';

const AllSellers = () => {
    const { user } = useContext(authContext)
    const [loading, setLoading] = useState(false)
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`https://mobihub-server.vercel.app/sellers?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    const handelDeleteUser = (email) => {
        fetch(`https://mobihub-server.vercel.app/users/${email}?email=${user.email}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('user deleted')
                    refetch()
                }
            })
    }

    const handelVerify = (id) => {
        setLoading(true)
        fetch(`https://mobihub-server.vercel.app/sellers/verified/${id}?email=${user.email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                setLoading(false)
                if (data.modifiedCount > 0) {
                    toast.success('User verified')
                }
            })
    }
    return (
        <div className='lg:m-12'>
            <Helmet>
                <title>MobiHub-All-Sellers</title>
            </Helmet>
            <h2 className='text-3xl font-bold text-center'>All Sellers</h2>
            {
                isLoading ? <Spinner></Spinner> :
                    <div className='my-12'>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Verification</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        sellers.map(seller => <tr key={seller._id}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={seller.img} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {seller.name}
                                            </td>
                                            <td>{seller.email}</td>
                                            <th>
                                                {
                                                    loading ? <SmallSpinner></SmallSpinner> : <>
                                                        {
                                                            seller?.verified ? <p>Verified</p> :
                                                                <button onClick={() => handelVerify(seller._id)} className="btn bg-green-600 btn-xs border-none mx-auto">Verify</button>
                                                        }
                                                    </>
                                                }
                                            </th>
                                            <th>
                                                <button onClick={() => handelDeleteUser(seller.email)} className="btn bg-red-600 btn-xs border-none">Remove</button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </div >
    );
};

export default AllSellers;