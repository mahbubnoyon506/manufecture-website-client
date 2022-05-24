import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0m3ZDl4aqKhSry404LiN0wWgPfpHi09C4GAdiVJ5UHHN1dDOzSURB54zDkEhDCSWQE6SEbHjddW6IQdSKJwOps00Kq9ZM9WC');

const Payment = () => {
    const { id } = useParams();
    const { data: order, isLoading} = useQuery('orderid', () =>
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => {

                return res.json()
            })
    )
    if (isLoading) {
        return <Loader></Loader>
    }
    const {name, quantity, product, amount } = order;
    return (
        <div>

            <div class="text-center grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className='card w-full shadow-2xl bg-base-100'>
                    <div class="card-body text-left">
                        <h3 className='text-xl font-semibold'> <span className='text-primary'>{name}</span></h3>
                        <h3 className='text-md font-semibold'>You ordered <span className='text-primary'>{product} </span> </h3>
                        <p className=''>Total product {quantity} pieces.</p>
                        <p className=''>Total amount $ {amount} </p>

                    </div>
                </div>
                <div class="card w-full shadow-2xl bg-base-100">
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;