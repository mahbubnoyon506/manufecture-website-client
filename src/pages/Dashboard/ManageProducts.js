import React from 'react';
import useServices from '../../hooks/UseServices';
import ManageProductsTable from './ManageProductsTable';

const ManageProducts = () => {
    const [services] = useServices();
    console.log(services)
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
                         services.map((service, index) => <ManageProductsTable key={service._id} service={service} index={index}></ManageProductsTable>)
                     }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;