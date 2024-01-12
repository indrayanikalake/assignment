import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserState } from '../context/UserProvider';
import { Avatar, Paper } from '@mui/material';
import loginSvg from '../assets/secureLogIn.svg';

const UserDetails = () => {
  const { id } = useParams();
  const { users } = UserState();
  const [user, setUser] = useState(null); // Initially set to null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const selectedUser = users.find((user) => user.id == id);
      setUser(selectedUser); // Update state with the fetched user
      setLoading(false);
    };

    fetchUser();
  }, [users, id]); // Add dependencies for re-fetching when users or id change

  return (
    <div className=''>
      {loading ? (
        <div className='text-xl'>Loading user details...</div>
      ) : (
        <>
          <div className='green-pink-gradient flex justify-center p-10'>
             <img
              className=' h-[236px] w-[596px]'
              src={loginSvg}
              alt='user_name'
            />
            
          </div>
          <div className=' flex justify-center mt-[-18px] items-center mb-4 content-center  space-y-5 ' >
            <Paper elevation={5}>
            <div className='mt-[-20px] flex justify-center'>
            <Avatar
              sx={{ width: 196, height: 196, boxShadow: ' 2px 2px 8px rgba(0,0,0, 0.25)' }}
              alt='user_image'
              src={user?.image} // Use optional chaining for safe access
            />
            </div>
            <div className=' h-14 text-sm md:text-xl'/>
            <h1 className=' text-4xl flex justify-center space-x-10 font-bold'>{user?.firstName} {user?.lastName}</h1>
            <div className='flex md:justify-between items-center md:m-10 md:p-8'>
                <div>
                  <h4 className='  font-serif'>Height:  </h4>
                  <h4 className='  font-serif'>weight:  </h4>
                  <h4 className='  font-serif'>Blood Group:  </h4>
                  <h4 className='  font-serif'>Email:  </h4>
                  <h4 className='  font-serif'>Phone:  </h4>
                  <h4 className=' font-serif'>University:  </h4>
                  
                </div>
                <div>
                  <h4 className='  font-serif'>{user?.age} cm</h4>
                  <h4 className=' font-serif'>{user?.weight} Kg</h4>
                  <h4 className='  font-serif'>{user?.bloodGroup}</h4>
                  <h4 className=' font-serif'>{user?.email}</h4>
                  <h4 className=' font-serif'>{user?.phone}</h4>
                  <h4 className=' font-serif'>{user?.university}</h4>
                 
                </div>
            </div>
            </Paper>
          </div>
          
        
        </>
      )}
    </div>
  );
};

export default UserDetails;