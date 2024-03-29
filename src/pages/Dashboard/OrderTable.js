import React from 'react';
import { toast } from 'react-toastify';

const OrderTable = ({ order, index, refetch }) => {
    const { _id, paid, shipped, product, email, amount } = order;

    const handleShipping = () => {
        const status = {
            shipped: true,
        }
        fetch(`https://manufecture-website-server.onrender.com/orders/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Status changed to shipped')
                    refetch()
                } else {
                    toast.error('This order is still unpaid.')
                }
            })
    }
    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{product}</td>
            <td>$ {amount}</td>
            <td>
                {
                    paid ?
                        <p className="text-md text-primary">Paid</p>
                        :
                        <p className="text-red-500 text-md">Un Paid</p>
                }
            </td>
            <td>
                {
                    paid && shipped ?
                        <p className="text-md text-primary">Shipped</p>
                        :
                        <button onClick={handleShipping} className="btn btn-xs btn-outline text-red-500 hover:bg-primary hover:text-base-100 hover:border-0">Pending</button>
                }

            </td>
        </tr>
    );
};

export default OrderTable;