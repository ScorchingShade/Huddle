import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavIndex from "./components/Navbar/NavIndex";
import Landing from "./views/Landing";
import Signup from "./views/Signup";
import Login from "./views/Login";
import { useEffect, useState } from "react";
import Dashboard from "./views/Dashboard";
import Step2 from "./views/Step2";

function App() {
  const [authUser, setAuthUser] = useState();

  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token === {}) {
      setAuthUser(null);
    } else {
      setAuthUser(token);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <Router>
      <NavIndex authUser={authUser}></NavIndex>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/home" exact render={(props) => <Landing {...props} />} />
        <Route path="/signup" exact render={(props) => <Signup {...props} />} />
        <Route path="/login" exact render={(props) => <Login {...props} />} />
        <Route path="/dashboard" exact render={(props) => <Dashboard {...props} />} />
        <Route path="/step2" exact render={(props) => <Step2 {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
