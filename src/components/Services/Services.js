import Service from './Service';
import Loader from '../Loader'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
const axios = require('axios');

const Services = () => {
    const [services, setServices] = useState([]);
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0)
    const [isloading, setIsloading] = useState(true)

    useEffect( () => {
        (async () => {
           const {data} = await axios.get(`https://nameless-falls-03567.herokuapp.com/services?limit=${limit}&pageNumber=${page}`)
           if(!data?.success) return toast.error("Products didn't found.")
           setServices(data.data)
           setPageCount(Math.ceil(data.count/limit))
           setIsloading(false)
        })()
    } , [page, limit])
    if(isloading){
        return <Loader></Loader>
    }
    return (
        <div className='pb-16'>
            <h2 className='text-4xl text-primary text-center font-semibold py-5'>Our Featured Products</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 mb-10'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className='flex justify-end mx-10'>
               {
                [...Array(pageCount).keys()].map((number, index) => 
                <button key={index} className={`btn btn-outline text-primary border-primary hover:bg-primary hover:border-primary mx-2 ${number === page ? 'bg-primary text-white' : ''}`} onClick={() => setPage(number)}>
                   {number + 1}
                </button>
                )
               }
            <select defaultValue={limit} onChange={ e => setLimit(e.target.value)} className='btn btn-outline btn-primary' name="" id="">
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="12">12</option>
            </select>
            </div>
        </div>
    );
};

export default Services;