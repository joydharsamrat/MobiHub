import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { authContext } from '../../../context/AuthProvider/AuthProvider';
import Spinner from '../../../components/Spinner'


const AllBuyers = () => {
    const { user } = useContext(authContext)

    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/buyers?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    console.log(buyers)
    return (
        <div className='m-12'>
            <h2 className='text-5xl font-bold text-center'>All Buyers</h2>
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
                                                <button className="btn bg-red-600 btn-xs border-none">Remove</button>
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