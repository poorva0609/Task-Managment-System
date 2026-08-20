import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import './Register.css'
import {
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";


const UserForm = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    age:""
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
    if(formData.password != formData.confirmpassword){
        alert("password not matched!");
    }

    const str="0123456789/?><,.!@#$%^&*(){}[]:;+-*-_=|";
    for(const i of str){
        if(formData.name.includes(i)){
            alert("Not a valid name");
            break;
        }
    }

    localStorage.setItem("auth" , JSON.stringify(formData));
    navigate("/");

  };

  return (
    <Box className="parent-register"
    
      component="form"
      onSubmit={handleSubmit}>
        
    <Box className="child-register">
      <Typography variant="h3">
        Create Account
      </Typography>

      <Typography variant="h6">
        Fill in the details to get started.
      </Typography>

      <TextField
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
      />

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

      <TextField
        label="confirmpassword"
        name="confirmpassword"
        type="password"
        value={formData.confirmpassword}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="age"
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        fullWidth
        required
      />

      <Button  className="register_button"
        type="submit"
        fullWidth
      >
        Register
      </Button>

      <pre>Already have an Account? <Link to="/Login"> LOGIN </Link></pre>

      </Box>

    </Box>

    
  );
};

export default UserForm;