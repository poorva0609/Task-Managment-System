import {
  Box,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import './Profile.css'
import Navbar from "../Components/Navbar/Navbar";

const Profile = () => {

  const {name , email , age} = JSON.parse(localStorage.getItem("auth") || "{}");
 
  const Navigate = useNavigate()

  const delItems=()=>{
    localStorage.removeItem("auth")
    localStorage.removeItem("tasks")
    Navigate("/Register")
  }
  
  return (
    <>
    <Navbar />
    <Box className="profile_page">
      
      <Box className="inner-profile">
        
     <Box className='heading'>
    <Typography variant='h3'>Welcome! {name}</Typography>
      <Typography variant='h5'>{email}</Typography>
    </Box>


    <Box className='name'>
      <Typography variant="h5">
        Full Name
      </Typography>

      <Typography>
        {name}
      </Typography>
    </Box>

<Box className='email'>
      <Typography variant="h5">
        Email Address 
      </Typography>

      <Typography>
        {email}
      </Typography>
</Box>

<Box className='age'>
      <Typography variant="h5">
        Age {age}
      </Typography>

      <Typography>
        {age}
      </Typography>
  </Box>
 
 <Box className="profile_button">
      <button onClick={delItems}>DELETE</button>
</Box>
      </Box>

    </Box>
    </>
  )
}

export default Profile
