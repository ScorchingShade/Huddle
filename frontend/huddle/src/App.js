import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavIndex from './components/Navbar/NavIndex'
import Landing from './views/Landing';
import Signup from './views/Signup';
import Login from './views/Login';


function App() {
  return (
    <Router>
    <NavIndex></NavIndex>   
    <Switch>
    <Route path="/" exact component={Landing}/>
    <Route path="/home" exact  render={(props) => <Landing {...props}/>}/>
    <Route path="/signup" exact  render={(props) => <Signup {...props}/>}/>
    <Route path="/login" exact  render={(props) => <Login {...props}/>}/>
      
      </Switch>        
 </Router>
      
  );
}



export default App;
