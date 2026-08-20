import Navbar from '../Components/Navbar/Navbar'
import TaskCard from '../Components/Task/TaskCard'
import './Dashboard.css'
import { useState } from 'react'
import type { taskDataArgs } from '../Components/Task/TaskForm'
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

  const onDeleted=(title:string)=>{
    const updatedTasks :taskDataArgs[] = []
    settaskData((prevTasks)=>{
      
     for(const i in prevTasks){
      if(prevTasks[i].title!==title){
        updatedTasks.push(prevTasks[i]);
      }

      else{
        continue;
      }
     }
     console.log(updatedTasks)
      localStorage.setItem("tasks" , JSON.stringify(updatedTasks));
    return updatedTasks;

    })}
    console.log("1",taskData)



  // checking if state is empty to render no task page
  if(isEmpty(tasks)){
    return <>
    <Navbar /><h1> no task found</h1>
    </>
  }
  // returning the actual page
  return (
    <> <Navbar />
    <Box className="dashboard_parent" >
      <Typography variant="h4">My Tasks </Typography>
      {console.log(taskData)}
      {taskData && taskData.map((task , index)=>{
      
       return <TaskCard key={index} task={task} onComplete={onCompleted} onDelete={onDeleted}/> 
      })}
    
    </Box>
    </>
  )
}

export default Dashboard
