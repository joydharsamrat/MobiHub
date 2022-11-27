import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from '../../../context/AuthProvider/AuthProvider';
import Spinner from '../../../components/Spinner'

const AllSellers = () => {
    const { user } = useContext(authContext)

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sellers?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    return (
        <div className='m-12'>
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
                                                    seller?.verified ? <p>Verified</p> :
                                                        <button className="btn bg-green-600 btn-xs border-none mx-auto">Verify</button>
                                                }
                                            </th>
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

export default AllSellers;