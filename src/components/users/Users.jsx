import axios from 'axios'
import React, { useEffect } from 'react'
import { data } from '../../data';
import { UserState } from '../../context/UserProvider';
import { Grid } from '@mui/material';
import Cards from './Card';

const Users =  () => {
    const {users, setUsers} = UserState();
    const getCard = async() =>{
       const response  = await axios.get(data);
       console.log(response.data.users);
       setUsers(response.data.users)
    }
    useEffect(()=>{
       getCard();
    },[])
   
  return (
    <div className=' bg-slate-800 '>
     <h1 className='mt-4 p-2 text-white text-5xl font-bold'>Rails and Real II : A Real Use Case</h1>
     <div className='pr-5 flex flex-row-reverse mr-10'>
     <input placeholder='Search people' />
    
     </div>
     <div className=' md:p-24'>
     <Grid  container justifyContent='center' spacing={4}>
     {users.map(user=>(
        <Grid key={user.id} item xs={12} sm={6} md={4} lg={4}>
         
           <Cards  user={user} />
        
        </Grid>
     ))}
     </Grid>
     </div>
    </div>
  )
}


export default Users
