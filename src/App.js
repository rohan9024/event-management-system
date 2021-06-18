import './App.css';

import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import Home from "./Home"
import BookEvents from "./BookEvents"
import Feedback from "./Feedback"
import ViewVenues from "./ViewVenues"
import Login from "./Login"
import { useStateValue } from "./StateProvider"



function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bookevents" component={BookEvents} />
            <Route path="/viewvenues" component={ViewVenues} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/login" component={Login} />
          </Switch>

        )}   
      </Router>



    </div>


  )
}

export default App;
