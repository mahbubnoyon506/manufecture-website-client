import { useEffect, useState } from "react";

const useServices = () =>{
    const [services, setServices] = useState([]);
    const [isloading, setIsloading] = useState(true)
    useEffect(() => {
        fetch('https://nameless-falls-03567.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setIsloading(false)
            })
    }, [])
    return [services, isloading];
    
}
export default useServices;