import DashBoard from "./components/dashboard/DashBoard";
import Login from "./components/login/Login";
import CreateEditProj from "./components/CreateEditProj/CreateEditProj";
import HeaderComp from "./components/HeaderComp";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
