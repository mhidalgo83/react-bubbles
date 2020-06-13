import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "../src/components/PrivateRoute";
import BubblePage from "../src/components/BubblePage";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="links">
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/protected">Bubble Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute
            exact
            path="/protected"
            component={BubblePage}
          ></PrivateRoute>
          <Route path="/" component={Login} />
          <Route component={Login} />
        </Switch>

        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
