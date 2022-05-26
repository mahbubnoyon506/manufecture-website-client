import React from 'react';

const DeleteMyOrder = ({deleteOrder, setDeleteOrder, refetch}) => {
    const {_id} = deleteOrder;
    console.log(_id)
    const handleDeleteOrder = () => {
        const url = `https://shielded-refuge-26741.herokuapp.com/orders/${_id}`;
       fetch(url, {
           method: 'DELETE',
           headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }           
       })
       .then(res => {
           console.log(res)
          return res.json()})
       .then(data => {
           console.log(data)
           refetch()
       })    
    }
  const handleCancel = () => {
    setDeleteOrder('')
  }
    return (
        <div>
            <input type="checkbox" id="deleteOrder" class="modal-toggle" />
            <label for="deleteOrder" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <div class="alert shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span className='text-xl text-red-600'>Are you sure to delete!</span>
                        </div>
                        <div class="flex-none">
                            <button onClick={handleDeleteOrder} class="btn btn-sm bg-red-600 text-base-100 hover:bg-red-600">Delete</button>
                            <button onClick={handleCancel} class="btn btn-sm btn-primary">Cancel</button>
                        </div>
                    </div>
                </label>
            </label>
        </div >
    );
};

export default DeleteMyOrder;