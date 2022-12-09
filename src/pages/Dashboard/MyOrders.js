import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loader from '../../components/Loader'
import auth from '../../firebase.init';
import DeleteMyOrder from './DeleteMyOrder';
import MyOrderTable from './MyOrderTable';


const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [deleteOrder, setDeleteOrder] = useState(null)
    const url = `https://manufecture-website-server.onrender.com/order?email=${user.email}`
    const { data: orders, isLoading, refetch } = useQuery('single-order', () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json()))

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
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
                        orders.map((order, index) => <MyOrderTable key={order._id} order={order} index={index} setDeleteOrder={setDeleteOrder}></MyOrderTable>)
                    }
                </tbody>
            </table>
            {
                deleteOrder && <DeleteMyOrder deleteOrder={deleteOrder} setDeleteOrder={setDeleteOrder} refetch={refetch}></DeleteMyOrder>
            }
            
        </div>
    );
};

export default MyOrders;