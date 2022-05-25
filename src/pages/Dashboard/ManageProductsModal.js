import React from 'react';

const ManageProductsModal = () => {
    
    return (
        <div>
            <input type="checkbox" id="manageProducts" class="modal-toggle" />
            <label for="manageProducts" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <div class="alert shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span className='text-xl text-red-600'>Are you sure to delete!</span>
                        </div>
                        <div class="flex-none">
                            <button class="btn btn-sm bg-red-600 text-base-100 hover:bg-red-600">Delete</button>
                            <button class="btn btn-sm btn-primary">Cancel</button>
                        </div>
                    </div>
                </label>
            </label>
        </div >
    );
};

export default ManageProductsModal;