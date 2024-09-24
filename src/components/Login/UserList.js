import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../../redux/userSlice'; // Adjust the import based on your file structure

const UserList = () => {
  const dispatch = useDispatch();

  // Getting the state values from the Redux store
  const { users, isLoading, error } = useSelector((state) => state.user);

  // Fetch users when the component mounts
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>User List</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
