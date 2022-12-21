import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Booking from '../../../components/Booking';

const WishlistCard = ({ product, refetch }) => {
    const [modal, setModal] = useState(false);
    const { name, img, price, buyerEmail, productId } = product

    const handelRemoveFromWishlist = () => {
        fetch(`https://mobihub-server.vercel.app/wishlist?buyerEmail=${buyerEmail}&&productId=${productId}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast("Item removed from wishlist")
                    refetch()
                }
            })
    }

    return (
        <div className='my-12'>
            <div className="card bg-slate-100 shadow-xl">
                <figure className="px-10 pt-10 ">
                    <img src={img} alt={name} className="rounded-xl max-h-48" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Price : BDT {price}</p>

                    <div className='flex items-center justify-around'>
                        <label onClick={() => setModal(true)} htmlFor="booking-modal" className="btn w-1/2 bg-[#004aad]">Book Now</label>
                        <button onClick={handelRemoveFromWishlist} className='btn btn-error'>Remove</button>
                    </div>

                </div>
            </div>
            {
                modal && <Booking product={product} setModal={setModal}></Booking>
            }
        </div>
    );
};

export default WishlistCard;