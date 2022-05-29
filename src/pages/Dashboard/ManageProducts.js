import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../../components/Loader';
import ManageProductsModal from './ManageProductsModal';
import ManageProductsTable from './ManageProductsTable';

const ManageProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const {data: services, isLoading, refetch} = useQuery('services', () => 
    fetch('http://localhost:5000/services', {
        method: 'GET',
        headers: {
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json()));
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Count</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Availability</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                     {
                         services.map((service, index) => <ManageProductsTable key={service._id} service={service} index={index} refetch={refetch} setDeleteProduct={setDeleteProduct}></ManageProductsTable>)
                     }
                </tbody>
            </table>
            {deleteProduct && <ManageProductsModal refetch={refetch} setDeleteProduct={setDeleteProduct} deleteProduct={deleteProduct}></ManageProductsModal>}
        </div>
    );
};

export default ManageProducts;