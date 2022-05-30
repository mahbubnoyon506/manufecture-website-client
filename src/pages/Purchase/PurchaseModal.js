import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const PurchaseModal = ({purchase, user, service, setPurchase}) => {
    const { email, displayName } = user;
    const {_id, price, name, available} =service
    const { register, formState: { errors }, handleSubmit} = useForm();
    const amount = (price * purchase);
    const updated = (available - purchase);
    const onSubmit = data => {
        const order = {
            product:name,
            quantity: purchase,
            name: displayName,
            email: email,
            phone: data.phone,
            address: data.address,
            amount: amount,
        }
        fetch('https://nameless-falls-03567.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then( result => {
            toast.success('Congrats!! Your order is placed.')
            setPurchase(null);
        })

         const current = {
             available:updated,
            };
        fetch(`https://nameless-falls-03567.herokuapp.com/service/${_id}`, {
          method: 'PUT',
          headers: {
              'content-type' : 'application/json',
              'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(current)
        })
        .then(res => res.json())
        .then(update => {
            console.log(update)
        })
    };
    let showErrorMessage;
    if (errors) {
        showErrorMessage = <small className='text-red-500'>{errors.message}</small>
    }

    return (
        <div>
            <input type="checkbox" id="purchase-confirm" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box ">
                    <h2 className='text-xl text-center text-primary mb-5 font-semibold'>Fill the form and confirm purchase.</h2>
                    <label for="purchase-confirm" class="btn btn-sm btn-circle absolute right-2 top-2 bg-primary text-base-100">✕</label>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            value={displayName}
                            readOnly
                            class="input input-sm input-bordered w-full purchase-confirm focus:outline-0 py-5"
                        />
                        <input
                            type="email"
                            value={email}
                            readOnly
                            class="input input-sm input-bordered w-full purchase-confirm focus:outline-0 py-5 my-5"
                        />
                        <input
                            type="text"
                            value={purchase}
                            readOnly
                            class="input input-sm input-bordered w-full purchase-confirm focus:outline-0 py-5 "
                        />
                        <input
                            type="number"
                            placeholder="Type phone number?"
                            class="input input-sm input-bordered w-full purchase-confirm focus:outline-0 py-5 mt-5"
                            {...register('phone', {
                                required: {
                                    value: true,
                                    message: 'Phone number is required'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                        </label>
                        <input
                            type="text"
                            placeholder="Type your address here"
                            class="input input-sm input-bordered w-full purchase-confirm focus:outline-0 py-5"
                            {...register('address', {
                                required: {
                                    value: true,
                                    message: 'Address is required'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                        </label>
                        {showErrorMessage}
                        <input type="submit" value="Confirm Purchase" class="btn btn-primary w-full text-base-100" />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default PurchaseModal;