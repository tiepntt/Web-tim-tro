import React from "react";

import "./App.scss";
import { createBrowserHistory } from "history";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { HomePage } from "../page/homepage";
import { ApartmentDetail } from "../page/apartment";

const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route path="/apartment" component={ApartmentDetail} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
