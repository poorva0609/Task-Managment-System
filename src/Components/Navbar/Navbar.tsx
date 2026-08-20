import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import {

  Button,
  Typography,
} from "@mui/material";
 


const Navbar = () => {
  const Navigate= useNavigate()
  return (
    <div className="parent_Navbar">

    <Typography variant="h5">
      Task Manager
      </Typography>

    <Link to="/">Dashboard</Link>
    <Link to="/addtask">Add task</Link>
    <Link to="/Profile">Profile</Link>

    <Button onClick={()=>{
      Navigate("/Login")
    }}>LOG OUT</Button>
    </div>
  )
}

export default Navbar
