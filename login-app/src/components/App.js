import React from "react";
import { Router, Redirect, Route } from "react-router-dom";
import history from "../history";

import Home from "./home/Home";
import Login from "./login/Login";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Router>
    </div>
  );
};

export default App;
