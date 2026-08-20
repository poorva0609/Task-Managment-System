import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import './Login.css'
import {
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";


const LoginForm = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {email , password} = JSON.parse(localStorage.getItem("auth") || "{}");

    if(email == formData.email && password == formData.password){
       navigate("/")
    }

    else{
        alert("Invalid Credentials!");
    }
    

  };

  return (
    <Box className="parent"
      component="form"
      onSubmit={handleSubmit}
    >
      <Box className="inner-parent">
      <Box className="child1">
      <Typography variant="h5">
        Login
      </Typography>

      <TextField 
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField 
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        required
      />

      <Button
        type="submit"
        fullWidth
      >
        Login
      </Button>

      <pre>Don't have an Account? <a href="/Register"> Register </a></pre>
      <pre>Forgot your Password? <Link to="/ForgotPass"> Forget Password </Link></pre>
      </Box>
 

      <Box className="child2">
        <Typography variant="h2">
        Task Manager
      </Typography>

      <Typography variant="h6">
         Welcome back! Please login to your account
      </Typography>

        <img src="https://media.istockphoto.com/id/1164538944/vector/woman-with-laptop-studying-or-working-concept-table-with-books-lamp-coffee-cup-vector.jpg?s=612x612&w=0&k=20&c=VhUj_AZoUnilUKdRessjsK6JQUjXCfum7RQyuzOr6_0=" className="login-image" />
      </Box>
     </Box>
    </Box>

    
  );
};

export default LoginForm;