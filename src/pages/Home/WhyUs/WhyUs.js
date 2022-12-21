import React from 'react';
import { TiTick } from "react-icons/ti";

const WhyUs = () => {
    return (
        <div className='my-20'>
            <h2 className='text-center text-3xl font-bold'>Why Trust Us</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='p-5 lg:p-10 relative h-screen'>
                    <img data-aos="fade-right" className='rounded-lg h-full w-auto' src="/assets/pexels-karolina-grabowska-4968648.jpg" alt="" />
                    <figure data-aos="fade-up" className='absolute bottom-10 left-1/3 border-[10px] rounded-tl-lg rounded-r-lg'>
                        <img src="assets/download.jpg" alt="" />
                    </figure>
                </div>
                <div className='p-10'>

                    <div data-aos="fade-right" className=' mt-10 flex items-center gap-2'>
                        <p className='text-[#004aad] text-5xl'><TiTick></TiTick></p>
                        <div>
                            <h4 className='text-xl font-bold'>Quick & Hassle-free</h4>
                            <p>Get mobile in a click at your home or office</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" className=' mt-10 flex items-center gap-2'>
                        <p className='text-[#004aad] text-5xl'><TiTick></TiTick></p>
                        <div>
                            <h4 className='text-xl font-bold '>Trained Professionals</h4>
                            <p>Trusted experts to help every step of the way</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" className=' mt-10 flex items-center gap-2'>
                        <p className='text-[#004aad] text-5xl'><TiTick></TiTick></p>
                        <div>
                            <h4 className='text-xl font-bold '>Premium Products</h4>
                            <p>Certified, high quality products guaranteed</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" className=' mt-10 flex items-center gap-2'>
                        <p className='text-[#004aad] text-5xl'><TiTick></TiTick></p>
                        <div>
                            <h4 className='text-xl font-bold'>Amazing Prices</h4>
                            <p>Buying or selling, you'll surely love our prices</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" className=' mt-10 flex items-center gap-2'>
                        <p className='text-[#004aad] text-5xl'><TiTick></TiTick></p>
                        <div>
                            <h4 className='text-xl font-bold'>Guaranteed Safety</h4>
                            <p>Buy or sell , we are the safest hands for your device security</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyUs;