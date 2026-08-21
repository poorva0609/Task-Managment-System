import AppRoutes from './Routes'
import {
  Box
} from "@mui/material";
import { taskStub } from "./stubs/taskStub";
import { authStub } from "./stubs/authStub";

if (!localStorage.getItem("tasks")) {
  localStorage.setItem("tasks", JSON.stringify(taskStub));
}

if (!localStorage.getItem("auth")) {
  localStorage.setItem("auth", JSON.stringify(authStub));
}

function App() {
  return (
    <Box>
    <AppRoutes />
    </Box>
  );
}

export default App;