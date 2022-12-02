import React from 'react';
import { motion } from "framer-motion"

const Reviews = () => {

    const div1 = {
        up: {
            y: -20,
            transition: {
                duration: 1,
                yoyo: Infinity
            }

        },
        down: {
            y: 10
        }
    }
    const div2 = {
        up: {
            y: -20,
        },
        down: {
            y: 10,
            transition: {
                duration: 1,
                yoyo: Infinity
            }
        }
    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>Customers Says</h2>
            <div className='lg:flex  justify-between lg:mx-12 my-20 py-5' >

                <motion.div
                    variants={div1}
                    animate="up"
                    initial='down'
                    className="card lg:w-52 bg-slate-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/BKqygyh/p2.jpg" alt="Shoes" className="rounded-xl w-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p> I wanted to write an honest review about this phone.I just bought a phone from Mobihub. I love this phone. .</p>
                    </div>
                </motion.div>
                <motion.div
                    variants={div2}
                    animate="down"
                    initial='up'
                    className="card lg:w-52 bg-slate-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/JKDdLh2/main-qimg-134e3bf89fff27bf56bdbd04e7dbaedf.webp" alt="Shoes" className="rounded-xl w-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p> I wanted to write an honest review about this phone.I just bought a phone from Mobihub. I love this phone. .</p>
                    </div>
                </motion.div>
                <motion.div
                    variants={div1}
                    animate="up"
                    initial='down'
                    className="card lg:w-52 bg-slate-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/3RzD5wZ/p3.jpg" alt="Shoes" className="rounded-xl w-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p> I wanted to write an honest review about this phone.I just bought a phone from Mobihub. I love this phone. .</p>
                    </div>
                </motion.div>
                <motion.div
                    variants={div2}
                    animate="down"
                    initial='up'
                    className="card lg:w-52 bg-slate-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/Njm69pS/p4.jpg" alt="Shoes" className="rounded-xl w-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p> I wanted to write an honest review about this phone.I just bought a phone from Mobihub. I love this phone. .</p>
                    </div>
                </motion.div>
                <motion.div
                    variants={div1}
                    animate="up"
                    initial='down'
                    className="card lg:w-52 bg-slate-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/wgGLz3g/p6.jpg" alt="Shoes" className="rounded-xl w-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p> I wanted to write an honest review about this phone.I just bought a phone from Mobihub. I love this phone. .</p>
                    </div>
                </motion.div>

            </div >
        </div>
    );
};

export default Reviews;

// It's a great device and I recommend it to anyone looking for an affordable smart phone. It has all of the features I like, including a camera. I really like that it's so easy to use.It's also pretty intuitive, especially for someone like me who has never used a smart phone before