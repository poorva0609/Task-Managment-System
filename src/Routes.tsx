import { Routes , Route } from 'react-router-dom'
import Login from './Pages/Login'
import ForgotPass from './Pages/ForgotPass'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'
import UserForm from "./Pages/Register";
import TaskForm from './Components/Task/TaskForm'
import Error from './Pages/Error'
import {
  Box
} from "@mui/material";

const AppRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<UserForm />} />
              <Route path='/addtask' element={<TaskForm />} />
        <Route path='/ForgotPass' element={<ForgotPass />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Box>
  )
}

export default AppRoutes
