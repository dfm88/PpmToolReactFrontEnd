import Dashboard from "./components/dashboard/DashBoard";
import { Divider } from "@material-ui/core";
import LandingPage from "./components/landingPage/LandingPage";
import Login from "./components/login/Login";
import Submit from "./components/signup/Submit";
import AddUpdateTask from "./components/AddUpdateTask/AddUpdateTask";
import CreateEditProj from "./components/CreateEditProj/CreateEditProj";
import HeaderComp from "./components/HeaderComp";
import ProjectTasksBoard from "./components/ProjectTasks/ProjectTasksBoard";

export default function App() {
  return (
    <div className="App">
      <HeaderComp />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <Dashboard />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <LandingPage />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <Login />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <Submit />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <AddUpdateTask />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <CreateEditProj />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <ProjectTasksBoard />
    </div>
  );
}
