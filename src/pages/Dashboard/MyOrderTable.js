import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderTable = ({ order, index }) => {
    const { _id, trasectionId, paid, product, amount, quantity } = order;
    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <td>{product}</td>
            <td>{quantity} Pieces</td>
            <td>$ {amount}</td>
            <td>
                {
                    paid ?
                        <>                        
                        <p class="text-xl text-primary">Paid</p>
                        <p class="text-md text-primary">Transection ID. <span className="text-accent">{trasectionId}</span></p></>

                        :
                        <Link className='btn btn-xs btn-outline text-primary hover:bg-primary hover:text-base-100 hover:border-0' to={`/dashboard/payment/${_id}`}>Pay Amount</Link>
                }


            </td>
        </tr>
    );
};

export default MyOrderTable;
