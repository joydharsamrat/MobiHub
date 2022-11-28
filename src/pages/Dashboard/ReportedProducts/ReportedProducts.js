import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import Spinner from '../../../components/Spinner';
import { authContext } from '../../../context/AuthProvider/AuthProvider';

const ReportedProducts = () => {
    const { user } = useContext(authContext)
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['booked'],
        queryFn: async () => {
            const res = await fetch(`https://mobihub-server.vercel.app/reported?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    const handelDeleteProduct = (_id) => {
        const confirm = window.confirm("Are you sure ?")
        if (confirm) {
            fetch(`https://mobihub-server.vercel.app/products/${_id}?email=${user.email}`, {
                method: "DELETE",
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('product deleted successfully')
                        refetch()
                    }
                })
        }
    }
    return (
        <div className='m-12'>
            <h2 className='text-3xl font-bold text-center'>Reported Products</h2>
            {
                isLoading ? <Spinner></Spinner> :
                    <div className='my-12'>
                        <Helmet>
                            <title>MobiHub-Reported-Products</title>
                        </Helmet>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Name</th>
                                        <th>Seller</th>
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
                                            <td>{product.sellerName}</td>
                                            <th>
                                                <button onClick={() => handelDeleteProduct(product._id)} className="btn bg-red-600 btn-xs mx-2 border-none">Delete</button>
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

export default ReportedProducts;