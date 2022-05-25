import React from 'react';



const ManageProductsTable = ({ service, index, refetch, setDeleteProduct }) => {
    const { _id, img, name, available } = service;
    const submit = () => {
        const url = `http://localhost:5000/services/${_id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {

                }
                console.log(data)
                refetch()
            })
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
            <td>
                <label onClick={() => setDeleteProduct(service)} for="manageProducts" class="btn btn-xs btn-outline text-red-500 hover:bg-primary hover:text-base-100 hover:border-primary">Remove</label>
            </td>
        </tr>
    );
};

export default ManageProductsTable;