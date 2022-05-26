import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transectionId, setTransectionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const {_id, amount, name, email } = order;
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ amount })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [amount])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setSuccess('')
        setProcessing(true)

        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false)
        }
        else {
            setCardError('');
            setTransectionId(paymentIntent.id)
            console.log(paymentIntent)
            setSuccess('Congrats! Your payment completed');
            const payment = {
                orderedId : _id,
                transectionId : paymentIntent.id
            }
            fetch(`http://localhost:5000/orders/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type' : 'application/json',
                    'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then( data => {
                setProcessing(false)
                console.log(data)
            })
        }
        if(processing){
            return <Loader></Loader>
        }
    }


    return (
        <div>
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
                <button className='block btn btn-sm btn-outline text-primary hover:bg-primary hover:text-base-100 hover:border-0 px-10 my-5' type="submit" disabled={!stripe || !clientSecret }>
                    Pay
                </button>
                <>
                    {
                        cardError && <p className='text-red-500'>{cardError}</p>
                    }
                    {
                        success && <div className="text-xl text-primary text-bold">
                            <p>{success}</p>
                            <p>Your payment ID: <span className="text-secondary">{transectionId}</span></p>
                        </div>
                    }
                </>
            </form>
        </div>
    );
};

export default CheckoutForm;