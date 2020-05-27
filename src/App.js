/* eslint-disable no-useless-constructor */
import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headerscontent from "./Header/Headerscontent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Header/Home";
import Register from "./Header/Register";
import SignIn from "./Header/Signin";
import Logout from "./Header/Logout";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Headerscontent />
        <Route path="/" exact component={SignIn} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/home" exact component={Home} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/register" exact component={Register} />
      </div>
    </Router>
  );
}

export default App;
