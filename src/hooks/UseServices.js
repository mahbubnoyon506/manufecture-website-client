import { useEffect, useState } from "react";

const useServices = () =>{
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://shielded-refuge-26741.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return [services];
    
}
export default useServices;