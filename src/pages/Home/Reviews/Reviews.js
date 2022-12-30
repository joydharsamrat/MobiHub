import React from 'react';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';


const Reviews = () => {


    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>Customers Says</h2>
            <div className='lg:flex  justify-between lg:mx-12 my-20 py-5' >
                <Swiper
                    spaceBetween={30}
                    slidesPerView={"auto"}
                    breakpoints={
                        {
                            0: {
                                slidesPerView: 1
                            },
                            980: {
                                slidesPerView: 2
                            },
                            1150: {
                                slidesPerView: 3
                            }
                        }
                    }
                    centeredSlides={true}
                    loop={true}
                >
                    <SwiperSlide>
                        <motion.div

                            className="card lg:w-80 h-96 bg-slate-100 shadow-xl">
                            <div className='flex items-center justify-center mt-10'>
                                <figure className="h-32 w-32 rounded-full">
                                    <img src="https://i.ibb.co/BKqygyh/p2.jpg" alt="Shoes" className=" rounded-full w-32 h-32" />
                                </figure>
                            </div>
                            <div className="card-body items-center text-center relative">
                                <figure className='w-8 h-8 absolute left-1 top-4 opacity-20'>
                                    <img src="/assets/quotation-mark.png" alt="" />
                                </figure>
                                <p> I wanted to write an honest review about this phone.I just bought a phone from Mobihub. I love this phone. .</p>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.div

                            className="card lg:w-80 h-96 bg-slate-100 shadow-xl">
                            <div className='flex items-center justify-center mt-10'>
                                <figure className=" rounded-full w-32 h-32">
                                    <img className=" rounded-full w-32 h-32" src="https://i.ibb.co/JKDdLh2/main-qimg-134e3bf89fff27bf56bdbd04e7dbaedf.webp" alt="Shoes" />
                                </figure>
                            </div>
                            <div className="card-body items-center text-center relative">
                                <figure className='w-8 h-8 absolute left-1 top-4 opacity-20'>
                                    <img src="/assets/quotation-mark.png" alt="" />
                                </figure>
                                <p> I wanted to write an honest review about this phone.I just bought a phone from Mobihub. I love this phone. .</p>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.div

                            className="card lg:w-80 h-96 bg-slate-100 shadow-xl">
                            <div className='flex items-center justify-center mt-10'>
                                <figure className="h-32 w-32 rounded-full">
                                    <img src="https://i.ibb.co/3RzD5wZ/p3.jpg" alt="Shoes" className=" rounded-full w-32 h-32" />
                                </figure>
                            </div>
                            <div className="card-body items-center text-center relative">
                                <figure className='w-8 h-8 absolute left-1 top-4 opacity-20'>
                                    <img src="/assets/quotation-mark.png" alt="" />
                                </figure>
                                <p> I wanted to write an honest review about this phone.I just bought a phone from Mobihub. I love this phone. .</p>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.div

                            className="card lg:w-80 h-96 bg-slate-100 shadow-xl">
                            <div className='flex items-center justify-center mt-10'>
                                <figure className="h-32 w-32 rounded-full">
                                    <img src="https://i.ibb.co/Njm69pS/p4.jpg" alt="Shoes" className=" rounded-full w-32 h-32" />
                                </figure>
                            </div>
                            <div className="card-body items-center text-center relative">
                                <figure className='w-8 h-8 absolute left-1 top-4 opacity-20'>
                                    <img src="/assets/quotation-mark.png" alt="" />
                                </figure>
                                <p> I wanted to write an honest review about this phone.I just bought a phone from Mobihub. I love this phone. .</p>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.div

                            className="card lg:w-80 h-96 bg-slate-100 shadow-xl">
                            <div className='flex items-center justify-center mt-10'>
                                <figure className="h-32 w-32 rounded-full">
                                    <img src="https://i.ibb.co/wgGLz3g/p6.jpg" alt="Shoes" className=" rounded-full w-32 h-32" />
                                </figure>
                            </div>
                            <div className="card-body items-center text-center relative ">
                                <figure className='w-8 h-8 absolute left-1 top-4 opacity-20'>
                                    <img src="/assets/quotation-mark.png" alt="" />
                                </figure>
                                <p> I wanted to write an honest review about this phone.I just bought a phone from Mobihub. I love this phone. .</p>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.div

                            className="card lg:w-80 h-96 bg-slate-100 shadow-xl">
                            <div className='flex items-center justify-center mt-10'>
                                <figure className="h-32 w-32 rounded-full">
                                    <img src="https://i.ibb.co/n7hWS61/julian-wan-WNo-Ln-Jo7t-S8-unsplash.jpg" alt="Shoes" className=" rounded-full w-32 h-32" />
                                </figure>
                            </div>
                            <div className="card-body items-center text-center relative ">
                                <figure className='w-8 h-8 absolute left-1 top-4 opacity-20'>
                                    <img src="/assets/quotation-mark.png" alt="" />
                                </figure>
                                <p> I wanted to write an honest review about this phone.I just bought a phone from Mobihub. I love this phone. .</p>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                </Swiper>
            </div >
        </div >
    );
};

export default Reviews;

// It's a great device and I recommend it to anyone looking for an affordable smart phone. It has all of the features I like, including a camera. I really like that it's so easy to use.It's also pretty intuitive, especially for someone like me who has never used a smart phone before