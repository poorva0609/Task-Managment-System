import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './ForgotPass.css'
import {
  Box,
  TextField,
  Typography,
} from "@mui/material";


const ForgotPass = () => {
      
    const navigate = useNavigate()

 const handleClick=()=>{
    alert("reset password , email sent");
    navigate('/Login')
 }
  return (
    <Box className="parent"
      component="form"
      onSubmit={(e)=>e.preventDefault()}
    >

      <Box className="child">
     <img src="https://media.istockphoto.com/id/2093604655/vector/low-cyber-security-a-female-character-has-problems-with-a-password-or-a-social-media-account.jpg?s=612x612&w=0&k=20&c=ijfcT11yUpLBRe-IRpSJFdK8BBZuVC5KNxeFt_RRf-M=" className="forgotPass-image" />
      
      <Typography variant="h5">
        Forgot Password?
      </Typography>

      <Typography variant="h6">
          Enter your email address and we'll   <br />
        send you a link to reset your password
          
      </Typography>

      <TextField
        label="Email"
        name="email"
        type="email"
        fullWidth
        required
      />

   

      <button className="pass_BUtton"
        onClick={handleClick}
      >
        Change Password
      </button>

      <pre> <Link to="/Login"> BACK TO LOGIN </Link></pre>
      </Box>

    </Box>

  );
};

export default ForgotPass;