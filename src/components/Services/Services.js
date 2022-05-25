
import useServices from '../../hooks/UseServices';
import Service from './Service';

const Services = () => {
    const [services] =useServices();
    return (
        <div className='grid grid-cols-3 gap-10 mx-10 mb-10'>
            {
                services.map(service => <Service key={service._id} service={service}></Service> )
            }
        </div>
    );
};

export default Services;