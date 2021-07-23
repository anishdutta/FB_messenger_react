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
import Posts from './messenger/posts';



function App() {
  return (
    <div className="container-fluid">
          <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link" to="/users">Posts</Link>
        </li>
        
        
        
      </ul>
      <div class="fb-btn d-flex">
        <Login></Login>
        </div>
     
    </div>
  </div>
</nav>
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/users">
            <Posts></Posts>
          </Route>
          <Route path="/">
           
            <Inboxlist></Inboxlist>
          </Route>
        </Switch>
      </div>
    </Router>
        
      
       
    </div>
  );
}

export default App;
