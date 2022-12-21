import React from 'react';
import { IoMdPricetags } from "react-icons/io";
import { motion } from "framer-motion"
import { HiLocationMarker, HiCurrencyDollar } from "react-icons/hi";
const SellSteps = () => {
    return (
        <div className='my-20 lg:mx-12'>
            <h2 className='text-center text-3xl font-bold'>Sell Your Phone</h2>
            <p className='text-center text-lg my-5'>Book a free pickup from your home or work at a time slot as <br /> per your convenience</p>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-12'>
                <div data-aos="fade-up" className='bg-slate-100 p-5 rounded-lg'>
                    <div className='flex items-center justify-center '>
                        <motion.p
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ y: -20, opacity: 1 }}
                            transition={
                                {
                                    duration: 1,
                                    yoyo: Infinity
                                }}
                            className=' text-[#004aad] text-5xl'><IoMdPricetags></IoMdPricetags></motion.p>
                        <h2 className='text-3xl font-bold'>Set Price</h2>
                    </div>
                    <p>Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you.</p>
                </div>
                <div data-aos="fade-down" className='bg-slate-100 p-5 rounded-lg'>
                    <div className='flex items-center justify-center '>
                        <motion.p initial={{ y: 0, opacity: 0 }}
                            animate={{ y: -20, opacity: 1 }}
                            transition={
                                {
                                    duration: 1,
                                    yoyo: Infinity
                                }
                            } className=' text-[#004aad] text-5xl'><HiLocationMarker></HiLocationMarker></motion.p>
                        <h2 className='text-3xl font-bold'>Schedule Pickup</h2>
                    </div>
                    <p>Book a free pickup from your home or work at a time slot as per your convenience</p>
                </div>
                <div data-aos="fade-up" className='bg-slate-100 p-5 rounded-lg'>
                    <div className='flex items-center justify-center '>
                        <motion.p initial={{ y: 0, opacity: 0 }}
                            animate={{ y: -20, opacity: 1 }}
                            transition={
                                {
                                    duration: 1,
                                    yoyo: Infinity
                                }
                            } className=' text-[#004aad] text-5xl'><HiCurrencyDollar></HiCurrencyDollar></motion.p>
                        <h2 className='text-3xl font-bold'>Get paid instantly</h2>
                    </div>
                    <p>Did we mention you get paid as soon as our executive picks up your device? It's instant & secure payment all the way!</p>
                </div>
            </div>
        </div>
    );
};

export default SellSteps;