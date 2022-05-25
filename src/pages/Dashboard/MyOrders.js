import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loader from '../../components/Loader'
import auth from '../../firebase.init';
import MyOrderTable from './MyOrderTable';


const MyOrders = () => {
    const [user] = useAuthState(auth);
    const url = `http://localhost:5000/order?email=${user.email}`
    const { data: orders, isLoading} = useQuery('single-order', () => fetch(url)
        .then(res => res.json()))

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Total amount</th>
                        <th>Payment Status</th>
                        <th>Shipping Status</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <MyOrderTable key={order._id} order={order} index={index}></MyOrderTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;