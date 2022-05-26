import React from 'react';
import { toast } from 'react-toastify';

const UsersTable = ({user, refetch, index}) => {
    const {email} = user;
const makeAdmin = () =>{
    const url = `https://shielded-refuge-26741.herokuapp.com/users/admin/${email}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => {
       if(res.status === 403){
           toast.error("You don't have access to make someone admin!!")
       }
       return res.json()})
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
            toast.success("This user is promoted as admin")
            refetch()
        }
    })
}
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {
                   user.role ? <button class="text-primary">Admin</button> :
                   <button onClick={makeAdmin} class="btn btn-xs btn-outline text-primary hover:bg-primary hover:text-base-100 hover:border-primary">Make Admin</button>
                }
            </td>
            {/* <td><button class="btn btn-outline btn-xs hover:bg-primary">Remove User</button></td> */}
        </tr>
    );
};

export default UsersTable;