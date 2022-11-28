import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://mobihub-server.vercel.app/categories')
            const data = await res.json()
            return data;
        }
    })
    return (
        <div className='my-20'>
            <h2 className='text-3xl font-bold text-center'>Categories</h2>
            <div className='my-20 lg:mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-black'>

                {
                    categories.map(category => <div className="card w-96 bg-slate-100 shadow-xl"
                        key={category._id}
                    >
                        <div className="card-body text-center">
                            <h2 className=' text-4xl font-semibold my-3'>{category.name}</h2>
                            <Link to={`/products/${category._id}`}><button className='bg-[#004aad] px-2 py-1 text-white rounded-lg'>Visit Products</button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;