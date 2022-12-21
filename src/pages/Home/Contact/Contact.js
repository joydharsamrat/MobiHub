import React from 'react';
import { GoMailRead } from "react-icons/go";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='mt-20 lg:flex flex-col justify-around items-center gap-10 bg-slate-100 py-10'>
            <div className='lg:flex flex-col justify-center items-center' >
                <div className='flex items-center gap-5 mb-10'>
                    <p className='text-5xl text-[#004aad]'><GoMailRead></GoMailRead></p>
                    <h2 className='text-3xl font-bold'>Subscribe Our Newsletter</h2>
                </div>
                <div className="form-control">
                    <div className="input-group ">
                        <input type="email" placeholder="Your Email Address" className="input input-bordered" />
                        <button className="btn">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-3xl flex items-center justify-center gap-10'>
                    <FaFacebookSquare className='text-blue-600'></FaFacebookSquare>
                    <FaInstagramSquare className='text-[#8a3ab9]'></FaInstagramSquare>
                    <FaTwitter className='text-blue-400'></FaTwitter>
                    <FaYoutube className='text-red-600'></FaYoutube>
                </div>

            </div>
        </div>
    );
};

export default Contact;