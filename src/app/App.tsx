import React, { useEffect } from "react";

import "./App.scss";
import { createBrowserHistory } from "history";
import { Redirect, Route, Router, Switch, useLocation } from "react-router-dom";
import { HomePage } from "../page/homepage";
import { ApartmentDetail } from "../page/apartment";
import { Login } from "../page/Login";
import { Register } from "../page/Register";
import { ProfilePage } from "../page/profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProfileUser } from "../page/profile-user";
import { AddApartmentPage } from "../page/addApartment";
import { useStore } from "react-redux";
import { loader } from "../loader";
import { PageNotFound } from "../page/404";
import { IntroPage } from "../containers/intro";
import { Term } from "../page/terms";
import { ChangePassword } from "../page/changePassword";
import DashboardLayout from "../components/admin/dashboard";
import HeaderItem from "../components/Navbar";
import Footer from "../components/Footer";

export const history = createBrowserHistory();
function App() {
  const store = useStore();


  useEffect(() => {
    loader(store);
  }, []);
  return (
    <div className="app">
      <Router history={history}>
        <HeaderItem />
        <div className="main-content">
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/link" component={IntroPage} />
            <Route exact path="/apartment/add">
              <AddApartmentPage type="add" />
            </Route>
            <Route path="/apartment/edit/:id">
              <AddApartmentPage type="edit" />
            </Route>
            <Route path="/apartment/:id">
              <ApartmentDetail />
            </Route>
            <Route path="/profile" component={ProfilePage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/changePassword" component={ChangePassword} />
            <Route path="/profileUser/:id" component={ProfileUser} />
            <Route path="/404" component={PageNotFound} />
            <Route path="/terms" component={Term} />
            <Route path="/admin" component={DashboardLayout} />

            <Redirect from="/" to="/home" />
          </Switch>
        </div>
        <div className="footer-item">
          <Footer />
        </div>
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
