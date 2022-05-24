import React from 'react';

const OrderTable = ({order, index}) => {
    const {product, email, amount} = order
    console.log(order)
    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{product}</td>
            <td>$ {amount}</td>
            <td><button class="btn btn-xs">Payment</button></td>
            <td><button class="btn btn-xs">To Shipped</button></td>
        </tr>
    );
};

export default OrderTable;