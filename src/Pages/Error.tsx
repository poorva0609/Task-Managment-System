import { Link } from 'react-router-dom'
import './Error.css'
import {
  Box,
  Typography
} from "@mui/material";

const Error = () => {
  return (
    <Box className="error">
      <Box className="error_inner">
      <Link to='*' />
      <Typography variant="h3">ERROR 404, PAGE NOT FOUND</Typography>
      <Typography variant="h4">This page is Not Found</Typography>
      <Link to="/Login"> BACK TO LOGIN </Link>
      </Box>
    </Box>
  )
}

export default Error
