import logo from './logo.svg';
import './App.css';
import Inboxlist from './messenger/Inboxlist';
import Login from './messenger/login';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import posts from './messenger/posts';


function App() {
  return (
    <div className="container-fluid">
          <Router>
      <div>
        <nav>
          <ul>
           
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Posts</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/users">
            <posts />
          </Route>
          <Route path="/">
            <Login></Login>
            <Inboxlist></Inboxlist>
          </Route>
        </Switch>
      </div>
    </Router>
        
      
       
    </div>
  );
}

export default App;
