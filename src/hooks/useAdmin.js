import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        const email = user?.email;
        if (email) {
            // const url = `https://manufecture-website-server.onrender.com/admin/${email}`;
            const url = `https://manufecture-website-server.onrender.com/user?email=${email}`;
            fetch(url, {
                method: 'GET',
                headers: {
                    'content-type' : 'application/json',
                    'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {

               return res.json()})
            .then( data => {
                // console.log(data.role)
                setAdmin(data.role);
                setAdminLoading(false)
            })
        }

    }, [user])
    return [admin, adminLoading];
}
export default useAdmin;