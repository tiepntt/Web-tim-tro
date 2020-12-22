import React, { useEffect } from "react";

import "./App.scss";
import { createBrowserHistory } from "history";
import { Redirect, Route, Router, Switch, useHistory } from "react-router-dom";
import { HomePage } from "../page/homepage";
import { ApartmentDetail } from "../page/apartment";
import { Login } from "../page/Login";
import { Register } from "../page/Register";
import { ProfilePage } from "../page/profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProfileUser } from "../page/profile-user";
import { AddApartmentPage } from "../page/addApartment";
import { useDispatch, useSelector, useStore } from "react-redux";
import { loader } from "../loader";
import { RootState } from "../store";
import {Term} from "../page/terms";

export const history = createBrowserHistory();
function App() {
  const store = useStore();
  const common = useSelector((state: RootState) => state.Common);
  const getCommon = () => {};

  useEffect(() => {
    loader(store);
  }, []);
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/apartment" component={ApartmentDetail} />
          <Route exact path="/apartment/create" component={ApartmentDetail} />
          <Route path="/apartment/add" component={AddApartmentPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profileUser" component={ProfileUser} />
          <Route path="/terms" component={Term} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
