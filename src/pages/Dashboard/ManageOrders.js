import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../components/Loader';
import OrderTable from './OrderTable';

const ManageOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('Orders', () =>
        fetch('http://localhost:5000/orders', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                return res.json()
            })
    )

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Amount </th>
                        <th>Payment Status</th>
                        <th>Make shipping</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <OrderTable key={order._id} order={order} index={index} refetch={refetch}></OrderTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;