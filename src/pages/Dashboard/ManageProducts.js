import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../components/Loader';
import ManageProductsTable from './ManageProductsTable';

const ManageProducts = () => {
    const {data: services, isLoading, refetch} = useQuery('services', () => 
    fetch('http://localhost:5000/services')
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
                         services.map((service, index) => <ManageProductsTable key={service._id} service={service} index={index} refetch={refetch}></ManageProductsTable>)
                     }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;