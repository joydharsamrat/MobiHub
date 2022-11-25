import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const products = useLoaderData();

    return (
        <div>
            {
                products?.map(product => <p>{product.name}</p>)
            }
        </div>
    );
};

export default Products;