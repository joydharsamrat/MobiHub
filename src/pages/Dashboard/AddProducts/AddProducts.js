import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../../context/AuthProvider/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(authContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const imgHostKey = process.env.REACT_APP_ImgBB_Key;
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
            return data;
        }
    })
    const handelAddProducts = (data, e) => {
        const photo = data.img[0];
        const formData = new FormData()
        formData.append('image', photo)

        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    const product = {
                        sellerName: user.displayName,
                        sellerEmail: user.email,
                        name: data.productName,
                        originalPrice: data.originalPrice,
                        sellingPrice: data.sellingPrice,
                        condition: data.condition,
                        categoryId: data.category,
                        phone: data.phone,
                        location: data.location,
                        img: result.data.url,
                        purchaseYear: data.purchaseYear,
                        description: data.description
                    }
                    const headers = {
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`,
                        }
                    }
                    axios.post(`http://localhost:5000/products?email=${user.email}`, product, headers)
                        .then(res => {
                            console.log(res)
                            if (res.data.acknowledged) {
                                toast.success('Product Added successfully')
                                navigate('/dashboard/myProducts')
                            }
                        })
                        .catch(err => console.log(err))
                }
            })


    }


    return (
        <div className='flex justify-center my-12'>
            <div className='bg-slate-100 border shadow-lg rounded-xl h-fit  p-5'>
                <h2 className='text-center text-3xl font-bold text-black'>Add a product</h2>
                <form onSubmit={handleSubmit(handelAddProducts)}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-4">
                        <div className="form-control w-full">
                            <input {...register("productName", { required: "Product name is required" })} type="text" placeholder='Product name' className="input input-bordered w-full " />
                            {errors.productName && <p className='text-red-600'>{errors.productName?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <input {...register("originalPrice", { required: "price is required" })} type="number" placeholder='Original Price' className="input input-bordered w-full " />
                            {errors.price && <p className='text-red-600'>{errors.price?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <input {...register("sellingPrice", { required: "price is required" })} type="number" placeholder='Selling Price' className="input input-bordered w-full " />
                            {errors.price && <p className='text-red-600'>{errors.price?.message}</p>}
                        </div>

                        <select  {...register("category", { required: "category is required" })} className="select select-bordered w-full ">
                            <option disabled selected hidden>Select product category</option>
                            {categories.map(category => <option key={category._id} value={category._id}>{category.name}</option>)}
                        </select>

                        <select {...register("condition", { required: "Condition name is required" })} className="select select-bordered w-full ">
                            <option disabled selected hidden>Select Product Condition</option>
                            <option value="fair">Fair</option>
                            <option value="good">Good</option>
                            <option value="excellent">Excellent</option>
                            {errors.condition && <p className='text-red-600'>{errors.condition?.message}</p>}
                        </select>
                        <div className="form-control w-full ">
                            <input {...register("phone", { required: "Mobile number is required" })} type="text" placeholder='Mobile number' className="input input-bordered w-full " />
                            {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <input {...register("location", { required: "Location is required" })} type="address" placeholder='Products location' className="input input-bordered w-full " />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <select {...register("purchaseYear", { required: "Year of purchase is required" })} className="select select-bordered w-full ">
                            <option disabled selected hidden>Select year of purchase</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            {errors.condition && <p className='text-red-600'>{errors.condition?.message}</p>}
                        </select>
                        <div className="form-control w-full  col-span-2">
                            <label htmlFor="img">Product photo</label>
                            <input {...register("img", { required: "Photo is required" })} id="img" type="file" className=" w-full " />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full  col-span-2">
                            <textarea {...register("description", { required: "description is required" })} type="text" placeholder='Products description' className="textarea textarea-bordered w-full " />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                    </div>
                    <input className='btn bg-[#004aad] w-full my-4 text-xl font-bold' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;