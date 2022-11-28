import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { authContext } from '../../../context/AuthProvider/AuthProvider';
import Spinner from '../../../components/Spinner'
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';


const AllBuyers = () => {
    const { user } = useContext(authContext)

    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`https://mobihub-server.vercel.app/buyers?email=${user.email}`, {
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
    return (
        <div className='lg:m-12'>
            <Helmet>
                <title>MobiHub-All-Buyers</title>
            </Helmet>
            <h2 className='text-3xl font-bold text-center'>All Buyers</h2>
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
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        buyers.map(buyer => <tr key={buyer._id}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={buyer.img} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {buyer.name}
                                            </td>
                                            <td>{buyer.email}</td>
                                            <th>
                                                <button onClick={() => handelDeleteUser(buyer.email)} className="btn bg-red-600 btn-xs border-none">Remove</button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </div>
    );
};

export default AllBuyers;