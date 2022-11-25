import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const Products = () => {
    const products = useLoaderData();

    return (
        <div className='mx-12 my-12 gap-5'>
            {
                products?.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
            }
        </div>
    );
};

export default Products;