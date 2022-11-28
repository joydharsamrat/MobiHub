import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckoutForm = ({ product }) => {
    const [cardError, setCardError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const { price, buyer, buyerEmail, productId, _id, name, seller } = product;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }


        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('')
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyer,
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            setProcessing(false)
            return
        }
        if (paymentIntent.status === 'succeeded') {


            const payment = {
                seller,
                product: name,
                price,
                transactionId: paymentIntent.id,
                buyer,
                buyerEmail,
                productId,
                bookingId: _id
            }

            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        setProcessing(false)
                        toast.success('Congrats!! Payment Successful')
                        setTransactionId(paymentIntent.id)
                    }
                })
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className='text-red-500'>{cardError}</p>
            <button className='btn btn-xs bg-[#004aad] mt-5' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            {
                transactionId && <p>TransactionId: {transactionId}</p>
            }
        </form>
    );
};

export default CheckoutForm;