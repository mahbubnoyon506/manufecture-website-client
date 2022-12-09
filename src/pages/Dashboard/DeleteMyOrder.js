import React from 'react';

const DeleteMyOrder = ({deleteOrder, setDeleteOrder, refetch}) => {
    const {_id} = deleteOrder;
    console.log(_id)
    const handleDeleteOrder = () => {
        const url = `https://manufecture-website-server.onrender.com/orders/${_id}`;
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
            <input type="checkbox" id="deleteOrder" className="modal-toggle" />
            <label for="deleteOrder" className="modal cursor-pointer">
                <label className="modal-box relative" for="">
                    <div className="alert shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span className='text-xl text-red-600'>Are you sure to delete!</span>
                        </div>
                        <div className="flex-none">
                            <button onClick={handleDeleteOrder} className="btn btn-sm bg-red-600 text-base-100 hover:bg-red-600">Delete</button>
                            <button onClick={handleCancel} className="btn btn-sm btn-primary">Cancel</button>
                        </div>
                    </div>
                </label>
            </label>
        </div >
    );
};

export default DeleteMyOrder;