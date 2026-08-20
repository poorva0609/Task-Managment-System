import Navbar from '../Components/Navbar/Navbar'
import TaskCard from '../Components/Task/TaskCard'
import { useState } from 'react'
import {
  Box,
  Typography,
} from "@mui/material";
const isEmpty = (obj) => obj && Object.keys(obj).length === 0;

const Dashboard = () => {
  // to get tasks 
  const tasks = JSON.parse(localStorage.getItem("tasks") || "{}")
  // saving tasks in state
  const [taskData , settaskData]= useState(tasks)

  // checking if state is empty or not 
  
  // on complete logic 

  const onCompleted = (title: string) => {
  settaskData((prevTasks) => {
    const updatedTasks = prevTasks.map((task) =>
      task.title === title
        ? {
            ...task,
            status: "completed",
          }
        : task
    );
    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );
    return updatedTasks;
  });
  };

  // checking if state is empty to render no task page
  if(isEmpty(tasks)){
    return <>
    <Navbar /><h1> no task found</h1>
    </>
  }
  // returning the actual page
  return (
    <Box className="dashboard_parent">
      <Navbar />
      <Typography variant="h4">My Tasks</Typography>
      {console.log(taskData)}
      {taskData && taskData.map((task , index)=>{
      
       return <TaskCard key={index} task={task} onComplete={onCompleted} /> 
      })}
    
    </Box>
  )
}

export default Dashboard
