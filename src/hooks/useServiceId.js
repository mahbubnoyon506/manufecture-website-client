import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const useServiceId = () => {
    const {id} = useParams();
    const [service, setService]= useState(id);
    useEffect(() => {
        const url = `https://nameless-falls-03567.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            }            
        })
        .then(res => res.json())
        .then(data => {
            setService(data)
        })
    }, [id])
    return [service];
}
export default useServiceId;