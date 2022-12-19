import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { EffectCreative } from "swiper"
import { useQuery } from "@tanstack/react-query";

const AdvertisedProducts = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['advertised'],
        queryFn: async () => {
            const res = await fetch('https://mobihub-server.vercel.app/advertisedProducts')
            const data = await res.json()
            return data;
        }
    })

    return (
        <>
            {
                products.length > 0 &&
                <div data-aos="fade-up" className="lg:mx-12 my-20 rounded-xl">
                    <Swiper
                        grabCursor={true}
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ["100%", 0, 0],
                            },
                        }}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        modules={[Autoplay, EffectCreative]}
                        className="mySwiper"
                    >

                        {
                            products.map(product => <SwiperSlide key={product._id}>
                                <div className="card lg:card-side lg:p-5 lg:h-96 bg-slate-100">
                                    <figure><img className="lg:w-96" src={product.img} alt="Movie" /></figure>
                                    <div className="card-body lg:w-1/2 mx-12">
                                        <h2 className="card-title">{product.name}</h2>
                                        <p className="my-2">Original Price : BDT<span>{product.sellingPrice}</span></p>
                                        <p className="my-2">Selling Price : BDT<span>{product.originalPrice}</span></p>
                                        <p className="my-2">Location : <span>{product.location}</span></p>
                                        <p className="my-2">{product.description}</p>
                                    </div>

                                </div>

                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            }
        </>
    );
}
export default AdvertisedProducts;