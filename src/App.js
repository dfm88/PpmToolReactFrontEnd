import Dashboard from "./components/DashBoard";
import { Divider } from "@material-ui/core";
import LandingPage from "./components/landingPage/LandingPage";
import Login from "./components/login/Login";
import Submit from "./components/signup/Submit";
import AddUpdateTask from "./components/AddUpdateTask/AddUpdateTask";

export default function App() {
  return (
    <div className="App">
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
    </div>
  );
}
