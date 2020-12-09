import React from "react";

import "./App.scss";
import { createBrowserHistory } from "history";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { HomePage } from "../page/homepage";
import { ApartmentDetail } from "../page/apartment";
import { Login } from "../page/Login";
import { Register } from "../page/Register";
import { ProfilePage } from "../page/profile";

const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/apartment" component={ApartmentDetail} />
        <Route exact path="/apartment/create" component={ApartmentDetail} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* <Redirect from="/" to="/home" /> */}
      </Switch>
    </Router>
  );
}

export default App;
