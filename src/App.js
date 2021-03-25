import DashBoard from "./components/dashboard/DashBoard";
import { Divider } from "@material-ui/core";
import LandingPage from "./components/landingPage/LandingPage";
import Login from "./components/login/Login";
import Submit from "./components/signup/Submit";
import AddUpdateTask from "./components/AddUpdateTask/AddUpdateTask";
import CreateEditProj from "./components/CreateEditProj/CreateEditProj";
import HeaderComp from "./components/HeaderComp";
import ProjectTasksBoard from "./components/ProjectTasks/ProjectTasksBoard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComp />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/addproject" component={CreateEditProj} />
      </div>
    </Router>
  );
}
