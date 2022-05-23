import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const ManageProductsTable = ({ service, index }) => {
    const {_id, img, name, available } = service;
    const submit = () => {
        const url = `http://localhost:5000/services/${_id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then( data => {
            if(data.deletedCount){
                
            }
            console.log(data)
        })

        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => alert('Click Yes')
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });

    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-24 rounded">
                        <img src={img} alt='' />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{available}</td>
            <td><button onClick={submit} class="btn btn-outline btn-xs hover:bg-primary">Remove</button></td>
        </tr>
    );
};

export default ManageProductsTable;