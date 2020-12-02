import React from "react";

import "./App.scss";
import { createBrowserHistory } from "history";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { HomePage } from "../page/homepage";
import { ApartmentDetail } from "../page/apartment";
import { Login } from "../page/Login";
import { Register } from "../page/Register";

const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route path="/apartment" component={ApartmentDetail} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
