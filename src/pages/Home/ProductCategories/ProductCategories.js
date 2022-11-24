import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
            return data;
        }
    })
    return (
        <div className='my-12 lg:mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-white'>
            {
                categories.map(category => <div className="card w-96 bg-[#8ecae6] shadow-xl"
                    key={category._id}
                >
                    <div className="card-body text-center">
                        <h2 className=' text-4xl font-semibold my-3'>{category.name}</h2>
                        <Link to={`/products/${category._id}`}><button className='bg-[#004aad] px-2 py-1 rounded-lg'>Visit Products</button></Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ProductCategories;