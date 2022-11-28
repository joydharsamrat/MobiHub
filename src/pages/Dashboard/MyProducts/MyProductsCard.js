import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../../context/AuthProvider/AuthProvider';

const MyProductsCard = ({ product, refetch }) => {
    const { user } = useContext(authContext);
    const { name, status, sellingPrice, img, _id, advertised } = product;

    const handelDeleteProduct = () => {
        const confirm = window.confirm("Are you sure ?")
        if (confirm) {
            fetch(`http://localhost:5000/products/${_id}?email=${user.email}`, {
                method: "DELETE",
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('product deleted successfully')
                        refetch()
                    }
                })
        }
    }
    const handelAdvertise = () => {
        fetch(`http://localhost:5000/products/advertised/${_id}?email=${user.email}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success("Product advertised")
                    refetch()
                }
            })
    }

    return (
        <div className="card bg-slate-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>BDT{sellingPrice}</p>
                <p><small className='text-Green font-bold'>{status}</small></p>
                {
                    status === 'available' &&
                    <div className="card-actions">
                        <button onClick={handelDeleteProduct} className="btn btn-error">Delete</button>
                        <button onClick={handelAdvertise} className="btn bg-[#004aad]" disabled={advertised}>Advertise</button>
                    </div>
                }
            </div>
        </div >
    );
};

export default MyProductsCard;