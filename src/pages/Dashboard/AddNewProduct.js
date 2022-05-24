import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddNewProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStoreKey = 'f2b9b9d7c6cda77e9468dc94c735cfc4';

    const onSubmit = async data => {

    //   const img = data.img[0];
    //   console.log(img)
    //   const formData = new FormData();
    //   formData.append('img', img);
    //   const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`;
    //   fetch(url, {
    //       method: "POST",
    //       body: formData
    //   })
    //   .then(res => res.json())
    //   .then( result => {
    //      console.log(result)
    //   })

        const product = {
           img:data.img,
           name: data.name,
           available: data.available,
           minimum: data.minimum,
           price: data.price,
           description: data.description,
        }
        console.log(product)
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged === true){
               toast.success('Wow!, Your product successfully added.');
               reset()
            }else{
                toast.error('Opps! Something wrong try again.');
                reset()
            }
        })
    };
    let showErrorMessage;
    if (errors) {
        showErrorMessage = <small className='text-red-500'>{errors.message}</small>
    }
    return (
        <div class="flex justify-center items-center min-h-screen bg-base-200">
                <div class="card w-1/2 shadow-2xl bg-base-100">
                    <div class="card-body">
                        <h2 className='text-2xl text-primary text-center'>Add product details here</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                placeholder='Photo URL'
                                class="input input-sm input-bordered w-full py-5 focus:outline-0"
                                {...register('img', {
                                    required: {
                                        value: true,
                                        message: 'Image is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                            </label>
                            <input
                                type="text"
                                placeholder="Type product name here"
                                class="input input-sm input-bordered w-full py-5 focus:outline-0"
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                            <input
                                type="number"
                                placeholder="Give product price here"
                                class="input input-sm input-bordered w-full py-5 focus:outline-0"
                                {...register('price', {
                                    required: {
                                        value: true,
                                        message: 'Price is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            </label>
                            <input
                                type="number"
                                placeholder="Type available quantity here"
                                class="input input-sm input-bordered w-full py-5 focus:outline-0"
                                {...register('available', {
                                    required: {
                                        value: true,
                                        message: 'Available quantity is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
                            </label>
                            <input
                                type="number"
                                placeholder="Type minimum order quantuty here"
                                class="input input-sm input-bordered w-full py-5 focus:outline-0"
                                {...register('minimum', {
                                    required: {
                                        value: true,
                                        message: 'Minimus quantity is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.minimum?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimum.message}</span>}
                            </label>
                            <textarea
                                type="text"
                                placeholder="Type Short Description here"
                                class="textarea textarea-bordered w-full focus:outline-0"
                                {...register('description', {
                                    required: {
                                        value: true,
                                        message: 'Short Description is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                            {showErrorMessage}
                            <input className='btn btn-sm w-full bg-primary text-white border-0 py-5' type="submit" value="Add Item" />
                        </form>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
};

export default AddNewProduct;