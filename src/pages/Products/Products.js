import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const Products = () => {
    const products = useLoaderData();

    return (
        <div className='mx-12 my-12'>
            <h2 className='text-3xl font-bold text-center'>Categories</h2>
            {
                products?.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
            }
        </div>
    );
};

export default Products;