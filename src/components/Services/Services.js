
import useServices from '../../hooks/UseServices';
import Service from './Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div className='mt-[-180px]'>
            <h2 className='text-4xl text-primary text-center font-semibold py-5'>Our Featured Products</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 mb-10'>
                {
                    services.slice(0, 6).map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>

    );
};

export default Services;