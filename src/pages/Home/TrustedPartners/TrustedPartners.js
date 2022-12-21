import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { motion } from 'framer-motion';

const TrustedPartners = () => {
    const [startCount, setStartCount] = useState(false)


    return (
        <div className='lg:mx-12 my-20'>

            <h2 className='text-3xl font-bold text-center'>Trusted By</h2>
            <p className='text-center'><span className='font-bold text-[#004aad]'>60.07 Lac +</span> <br />Happy Users and Major Brands</p>

            <div data-aos="fade-right" className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                <ScrollTrigger onEnter={() => setStartCount(true)} onExit={() => setStartCount(false)}>
                    <div className='grid grid-cols-1  lg:grid-cols-2 justify-center gap-12 text-center lg:p-12'>
                        {
                            startCount && <>
                                <div>
                                    <div className='text-5xl font-bold'>
                                        <CountUp
                                            start={0}
                                            end={230.32}
                                            duration={2}
                                            delay={0}
                                            decimals={2}
                                            suffix="Cr."
                                        ></CountUp>
                                    </div>
                                    <p className='text-xl font-bold'>Cash Given</p>
                                </div>
                                <div >
                                    <div className='text-5xl font-bold'>
                                        <CountUp
                                            start={10}
                                            end={80.03}
                                            duration={2}
                                            decimals={2}
                                            delay={0}
                                            suffix="Lac."
                                        ></CountUp>
                                    </div>
                                    <p className='text-xl font-bold'>Phones Cashed</p>
                                </div>
                                <div className=' col-span-full '>
                                    <div className='w-1/2  mx-auto  '>
                                        <div className='text-5xl font-bold'>
                                            <CountUp
                                                start={0}
                                                end={4.7}
                                                duration={1}
                                                decimals={1}
                                                delay={0}
                                                suffix="+"
                                            ></CountUp>
                                        </div>
                                        <p className='text-xl font-bold'>User Ratting</p>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </ScrollTrigger>
                <div data-aos="fade-up" className='lg:p-12'>
                    <div className='mt-10 flex flex-wrap gap-12 justify-center'>
                        <motion.figure
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{ opacity: .8, scale: .5 }}
                            transition={{ duration: 3, yoyo: "Infinity", }}
                            className='w-32'>
                            <img src="/assets/Apple-Logo.png" alt="" />
                        </motion.figure>
                        <motion.figure
                            animate={{ scale: 1, opacity: 1 }}
                            initial={{ opacity: .8, scale: .5 }}
                            transition={{ duration: 3, yoyo: "Infinity" }}
                            className='w-32 '>
                            <img src="/assets/Nokia-Logo.png" alt="" />
                        </motion.figure>
                        <motion.figure
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{ opacity: .8, scale: .5 }}
                            transition={{ duration: 3, yoyo: "Infinity" }}
                            className='w-32 '>
                            <img src="/assets/Oppo-logo.png" alt="" />
                        </motion.figure>
                        <motion.figure
                            animate={{ scale: 1.2, opacity: 1 }}
                            initial={{ opacity: .8, scale: .5 }}
                            transition={{ duration: 3, yoyo: "Infinity" }}
                            className='w-32 '>
                            <img src="/assets/samsung.png" alt="" />
                        </motion.figure>
                        <motion.figure
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{ opacity: .8, scale: .5 }}
                            transition={{ duration: 3, yoyo: "Infinity" }}
                            className='w-32 '>
                            <img src="/assets/Visa_Inc._logo.svg.webp" alt="" />
                        </motion.figure>
                        <motion.figure
                            animate={{ scale: 1, opacity: 1 }}
                            initial={{ opacity: .8, scale: .5 }}
                            transition={{ duration: 3, yoyo: "Infinity" }}
                            className='w-32 '>
                            <img src="/assets/MasterCard_Logo.svg.png" alt="" />
                        </motion.figure>
                        <motion.figure
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{ opacity: .8, scale: .5 }}
                            transition={{ duration: 3, yoyo: "Infinity" }}
                            className='w-32 '>
                            <img src="/assets/Bkash-logo.png" alt="" />
                        </motion.figure>
                        <motion.figure
                            animate={{ scale: 1, opacity: 1 }}
                            initial={{ opacity: .8, scale: .5 }}
                            transition={{ duration: 3, yoyo: "Infinity" }}
                            className='w-32 '>
                            <img src="/assets/vivo.png" alt="" />
                        </motion.figure>
                        <motion.figure
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{ opacity: .8, scale: .5 }}
                            transition={{ duration: 3, yoyo: "Infinity" }}
                            className='w-32 '>
                            <img src="/assets/Xiaomi-logo.png" alt="" />
                        </motion.figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedPartners;