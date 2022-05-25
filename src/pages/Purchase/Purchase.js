import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useServiceId from '../../hooks/useServiceId';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const [purchase, setPurchase] = useState(null)
    const [service] = useServiceId();
    const [error, setError] = useState(false)

    const handleOnBlour = e => {
        setPurchase(e.target.value)
    }

    let shoeError;
    if(error){
        shoeError= <p>{error}</p>
    }
    return (
        <div>
            <div class="hero min-h-screen bg-base-200 px-10">
                <div class="">
                    <h2 class="py-1 text-2xl font-bold">{user.displayName}</h2>
                    <h2 class="py-1 text-2xl font-bold">Email Account: {user.email}</h2>
                    <h4 class="pb-4 text-xl ">You have selected the product <span className='text-primary font-bold'>{service.name}</span>. Type your expected quantity and confirm puchase process.</h4>
                    <div class="text-center grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div class="card w-full shadow-2xl bg-base-100">
                            <div class="card-body">
                                <img className='w-full' src={service.img} alt="" />
                            </div>
                        </div>
                        <div className='lg:text-left my-auto'>
                            <h1 class="text-4xl font-bold">{service.name}</h1>
                            <p class=" text-accent text-xl">Product price per unit <span className='text-primary'>${service.price}</span></p>
                            <p class=" text-accent text-xl">Available products in stock <span className='text-primary'>{service.available} pieces.</span></p>
                            <p class=" text-accent text-xl">Minimum order quantity <span className='text-primary'>{service.minimum} pieces.</span></p>
                            <div className='my-3'>
                                {purchase && <PurchaseModal purchase={purchase} user={user} service={service} setPurchase={setPurchase}></PurchaseModal>}
                                <label disabled={!purchase} onClick={() => setPurchase(purchase)} for="purchase-confirm" class="btn btn-sm bg-primary text-white border-0 h-12">Pick Quantity</label>
                                <input required onChange={handleOnBlour} class="input input-bordered focus:outline-0 py-5 ml-2" type="number" />
                                {shoeError}
                            </div>
                        </div>
                    </div>
                    <div className='py-5'> <p ><span class="font-semibold">Products Description:</span> {service.description}</p></div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;