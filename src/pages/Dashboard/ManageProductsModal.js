import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useService from '../../hooks/useServiceId'

const ManageProductsModal = ({refetch, setDeleteProduct, deleteProduct}) => {
     const {_id} = deleteProduct;
    const handleremove = () =>{
        const url = `https://nameless-falls-03567.herokuapp.com/services/${_id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Product deleted.')
                setDeleteProduct('')
                refetch()
            })
    }
const handleCancelDelete = () => {
    setDeleteProduct('')   
}
    return (
        <div>
            <input type="checkbox" id="manageProducts" className="modal-toggle" />
            <label for="manageProducts" className="modal cursor-pointer">
                <label className="modal-box relative" for="">
                    <div className="alert shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span className='text-xl text-red-600'>Are you sure to delete!</span>
                        </div>
                        <div className="flex-none">
                            <button onClick={handleremove} className="btn btn-sm bg-red-600 text-base-100 hover:bg-red-600">Delete</button>
                            <button onClick={handleCancelDelete} className="btn btn-sm btn-primary">Cancel</button>
                        </div>
                    </div>
                </label>
            </label>
        </div >
    );
};

export default ManageProductsModal;