import DashBoard from "./components/dashboard/DashBoard";
import Login from "./components/login/Login";
import CreateProj from "./components/CreateEditProj/CreateProj";
import EditProj from "./components/CreateEditProj/EditProj";
import HeaderComp from "./components/HeaderComp";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComp />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/addproject" component={CreateProj} />
        <Route exact path="/editproject/:id" component={EditProj} />
      </div>
    </Router>
  );
}
