import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import NotFound from "./components/pages/NotFound";
import User from "./components/users/User";

import About from "./components/pages/About";
import "font-awesome/css/font-awesome.min.css";

import GithubState from "./components/context/github/GithubState";
import AlertState from "./components/context/alert/AlertState";
import "./App.css";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Github Finder" icon="fa fa-github" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
