import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../components/Loader';
import UsersTable from './UsersTable';

const AllUser = () => {
    const {data: users, isLoading, refetch } = useQuery('users', () =>
    fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => {
       return res.json()})
  )
  if(isLoading){
      return <Loader></Loader>
  }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Users</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Modify</th>
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