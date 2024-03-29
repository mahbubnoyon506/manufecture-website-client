const { useState, useEffect } = require("react")

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
       const email = user?.user?.email;
       const currentUser = {email: email};
       if(email){
           fetch(`https://manufecture-website-server.onrender.com/users/${email}`, {
               method: 'PUT',
               headers: {
                   'content-type' : 'application/json'
               },
               body: JSON.stringify(currentUser)
           })
           .then(res => res.json())
           .then(data => {
               const accessToken = data.token;
               localStorage.setItem('accessToken', accessToken);
               setToken(accessToken)
           })
       }
    }, [user])
    return [token];
}
export default useToken;