import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
    }, [])
    return (
        <div className='grid grid-cols-3 gap-10 mt-[-200px] mx-10 mb-10'>
            {
                services.map(service => <Service key={service.id} service={service}></Service> )
            }
        </div>
    );
};

export default Services;