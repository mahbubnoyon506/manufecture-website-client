import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderTable = ({order, index}) => {
    const {_id, product, amount, quantity} = order;
    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <td>{product}</td>
            <td>{quantity} Pieces</td>
            <td>$ {amount}</td>
            <td><Link className='btn btn-xs btn-outline bg-primary text-base-100' to={`/dashboard/payment/${_id}`}>Pay Amount</Link></td>
        </tr>
    );
};

export default MyOrderTable;