import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useServiceId from '../../hooks/useServiceId';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    const [purchase, setPurchase] = useState(null)
    const [service] = useServiceId();
    const [error, setError] = useState(false)

    const handleOnBlour = e => {
        setPurchase(e.target.value);
        setError('Admin could not purchase')
    }

    let showError;
    // if(error){
    //     showError= <p>{error}</p>
    // }
    if(admin){
        showError= <p className='text-red-500'>{error}</p> 
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 px-10">
                <div className="">
                    <h2 className="py-1 text-2xl font-bold">{user.displayName}</h2>
                    <h2 className="py-1 text-2xl font-bold">Email Account: {user.email}</h2>
                    <h4 className="pb-4 text-xl ">You have selected the product <span className='text-primary font-bold'>{service.name}</span>. Type your expected quantity and confirm puchase process.</h4>
                    <div className="text-center grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="card w-full shadow-2xl bg-base-100">
                            <div className="card-body">
                                <img className='w-full' src={service.img} alt="" />
                            </div>
                        </div>
                        <div className='lg:text-left my-auto'>
                            <h1 className="text-4xl font-bold">{service.name}</h1>
                            <p className=" text-accent text-xl">Product price per unit <span className='text-primary'>${service.price}</span></p>
                            <p className=" text-accent text-xl">Available products in stock <span className='text-primary'>{service.available} pieces.</span></p>
                            <p className=" text-accent text-xl">Minimum order quantity <span className='text-primary'>{service.minimum} pieces.</span></p>
                            <div className='my-3'>
                                {(purchase && !admin) && <PurchaseModal purchase={purchase} user={user} service={service} setPurchase={setPurchase}></PurchaseModal>}
                                <label disabled={(purchase < service.minimum || purchase > service.available) && !purchase} onClick={() => setPurchase(purchase)} for="purchase-confirm" className="btn btn-sm bg-primary text-white border-0 h-12">Pick Quantity</label>
                                <input required onChange={handleOnBlour} className="input input-bordered focus:outline-0 py-5 ml-2" type="number" />
                            </div>
                            {showError}
                        </div>
                    </div>
                    <div className='py-5'> <p ><span className="font-semibold">Products Description:</span> {service.description}</p></div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;