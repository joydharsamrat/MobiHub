import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Spinner from '../../../components/Spinner';
import { authContext } from '../../../context/AuthProvider/AuthProvider';
import WishlistCard from './WishlistCard';

const MyWishlist = () => {
    const { user } = useContext(authContext)
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await fetch(`https://mobihub-server.vercel.app/wishlist?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    console.log(products)
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='lg:m-12'>
            <Helmet>
                <title>MobiHub-My-Wishlist</title>
            </Helmet>
            <h2 className='text-5xl font-bold text-center'>My Wishlist</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    products.map(product => <WishlistCard key={product._id} product={product} refetch={refetch}></WishlistCard>)
                }
            </div>
        </div>
    );
};

export default MyWishlist;