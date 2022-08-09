import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../components/Loader';
import UsersTable from './UsersTable';

const AllUser = () => {
    const {data: users, isLoading, refetch } = useQuery('allUsers', () =>
    fetch('https://nameless-falls-03567.herokuapp.com/users', {
        method: 'GET',
        headers: {
           'content-type' : 'application/json',
            authorization : `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => {
       return res.json()})
  )
  if(isLoading){
      return <Loader></Loader>
  }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Users</th>
                        <th>Email</th>
                        <th>Status</th>
                        {/* <th>Modify</th> */}
                    </tr>
                </thead>
                <tbody>
                   {
                       users.map((user, index) => <UsersTable key={user._id} user={user} refetch={refetch} index={index}></UsersTable>)
                   }
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;