import { useEffect, useState } from "react"

const useAdmin = user =>{
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        const email = user?.email;
    fetch(`http://localhost:5000//admin/${email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => {
        // console.log(res)
       return res.json()})
    .then(data => {
        console.log(data)
        setAdmin(data.admin)
        setAdminLoading(false)
    })
    }, [user])
    return [admin, adminLoading];
}
export default useAdmin;