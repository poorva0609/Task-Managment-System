import {
  Box,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import './Profile.css'
import Navbar from "../Components/Navbar/Navbar";
import { useState } from 'react'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const {name , email , age} = JSON.parse(localStorage.getItem("auth") || "{}");
 
  const Navigate = useNavigate()

  const delItems=()=>{
    localStorage.removeItem("auth")
    localStorage.removeItem("tasks")
    Navigate("/Register")
  }
  
  return (
    <Box className="absolute_parent_profile">
    <Navbar />
    <Box className="profile_page">
      
      <Box className="inner-profile">
        
     <Box className='heading'>
    <Typography variant='h3' id="h3">Welcome! {name}</Typography>
      <Typography variant='h5' id="h5">{email}</Typography>
    </Box>


    <Box className='name'>
      <Typography variant="h5" id="h5">
        Full Name
      </Typography>

       {isEditing ? (
    <input type="text" defaultValue={name} />
  ) : (
    <Typography>
      {name}
    </Typography>
  )}
    </Box>

<Box className='email'>
      <Typography variant="h5" id="h5">
        Email Address 
      </Typography>

       {isEditing ? (
    <input type="text" defaultValue={email} />
  ) : (
    <Typography>
      {email}
    </Typography>
  )}
</Box>

<Box className='age'>
      <Typography variant="h5" id="h5">
        Age
      </Typography>

     {isEditing ? (
    <input type="text" defaultValue={age} />
  ) : (
    <Typography>
      {age}
    </Typography>
  )}
  </Box>
 
 <Box className="profile_button">
  <button onClick={() => setIsEditing(true)}>
    EDIT
  </button>

      <button onClick={delItems}>DELETE</button>
</Box>

      </Box>

    </Box>
    </Box>
  )
}

export default Profile
