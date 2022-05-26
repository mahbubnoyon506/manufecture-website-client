import React from 'react';
import { useParams } from 'react-router-dom';
import useService from '../../hooks/useServiceId'

const ManageProductsModal = ({refetch, setDeleteProduct, deleteProduct}) => {
     const {_id} = deleteProduct;
    const handleremove = () =>{
        const url = `https://shielded-refuge-26741.herokuapp.com/services/${_id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setDeleteProduct('')
                refetch()
            })
    }
const handleCancelDelete = () => {
    setDeleteProduct('')   
}
    return (
        <div>
            <input type="checkbox" id="manageProducts" class="modal-toggle" />
            <label for="manageProducts" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <div class="alert shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span className='text-xl text-red-600'>Are you sure to delete {deleteProduct.name}!</span>
                        </div>
                        <div class="flex-none">
                            <button onClick={handleremove} class="btn btn-sm bg-red-600 text-base-100 hover:bg-red-600">Delete</button>
                            <button onClick={handleCancelDelete} class="btn btn-sm btn-primary">Cancel</button>
                        </div>
                    </div>
                </label>
            </label>
        </div >
    );
};

export default ManageProductsModal;