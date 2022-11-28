import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from '../../../context/AuthProvider/AuthProvider';
import Spinner from '../../../components/Spinner';
import MyProductsCard from './MyProductsCard';
import { Helmet } from 'react-helmet-async';

const MyProducts = () => {
    const { user } = useContext(authContext);

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`https://mobihub-server.vercel.app/SellerProducts?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })
    return (
        <div className='m-12'>
            <Helmet>
                <title>MobiHub-My-Products</title>
            </Helmet>
            {
                isLoading ? <Spinner></Spinner> :

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>

                        {
                            products.map(product => <MyProductsCard
                                key={product._id}
                                product={product}
                                refetch={refetch}
                            ></MyProductsCard>)
                        }
                    </div>

            }
        </div>
    );
};

export default MyProducts;