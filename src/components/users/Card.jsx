import { Card, Avatar, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { IoLocationSharp } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";


const Cards = ({user}) => {
  return (
    <div className=' bg-white'>
    <Card  elevation={5} component={Link} to={`/user/${user.id}`} >
       
      <div 
        className={` flex justify-between h-[100px]  text-white  ${user.gender === 'male' ? 'bg-blue-400' : ' bg-pink-400'}`}
      >
        <Avatar
         alt={user.firstName}
        src={user.image}

        sx={{ width: '07rem', height: '07rem', border: '4px solid white '}}
        />
        <div className=' flex flex-col space-y-1 font-bold'>
            
        
            <Typography variant='h5'>
                  {user.firstName} {user.lastName}
            </Typography>
            <Typography variant='h8' sx={{display:"flex", flexDirection:'row'}}>
                <IoLocationSharp color='white' />
                   
                  {user.address.city} 
            </Typography>
            <Typography variant='h8'  sx={{display:"flex", flexDirection:'row'}}>
                <FaBirthdayCake color='white' />
                 {new Date(user.birthDate).toLocaleDateString("en-Us",{
                    day:"numeric",
                    month:"short",
                    year:"numeric"
                 })}
            </Typography>
           
        
         </div>
        
      </div>
      
      <div className='h-[70px] m-2'>
           <p className=' font-sans text-gray-500'>{user.university}</p>
      </div>
      <div className='flex flex-col bg-gray-200 p-2'>
       
          <div className='flex space-x-2'>
            <MdLocalPhone />
            <p>{user.phone}</p>
            </div>
          <div className='flex space-x-2'>
            <MdEmail  />
            <p>{user.email}</p>
            </div>
      </div>
    </Card>
    </div>
  )
}

export default Cards
