import React from 'react';
import { useQuery } from '@tanstack/react-query';
const AllBuyers = () => {
    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {

        }
    })
    return (
        <div className='m-12'>
            <h2 className='text-5xl font-bold text-center'>All Buyers</h2>
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
                                sellers.map(product => <tr key={product._id}>
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
                                        <button className="btn bg-green-600 btn-xs border-none">Pay</button>
                                        <button className="btn bg-red-600 btn-xs mx-2 border-none">Cancel</button>
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

export default AllBuyers;