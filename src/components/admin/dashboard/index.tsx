import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import { Redirect, Route, Switch, useHistory } from "react-router";

import { InfoProfile } from "../../Profile/Info";

import Conversation from "../../../containers/chat/conversation";
import Statistical from "../../Profile/chart";
import Messenger from "../../../containers/chat/messenger";
import { Contract } from "../../Profile/contract";

import { UserDashboard } from "../views/user";
import { ApartmentDashboard } from "../views/apartment";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { DashboardView } from "../views/dashboard";
import { Chat } from "../views/Chat";
import { ApproveDashboard } from "../views/approve";
const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: "#F4F6F8",
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

const DashboardLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const user = useSelector((state: RootState) => state.UserReducer.account);
  const history = useHistory();
  useEffect(() => {
    if (!user?.id) {
      history.push("/");
    }
  }, [user]);

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content} style={{ minHeight: 850 }}>
            <Switch>
              <Route exact path="/admin/apartment">
                <ApartmentDashboard />
              </Route>
              <Route exact path="/admin/info">
                <InfoProfile />
              </Route>

              {user?.role?.isApproveUser && (
                <>
                  <Route exact path="/admin/user/">
                    <UserDashboard />
                  </Route>
                  <Route exact path="/admin">
                    <DashboardView />
                  </Route>
                  <Route exact path="/admin/approve">
                    <ApproveDashboard />
                  </Route>
                </>
              )}

              <Route exact path="/admin/support">
                <Chat />
              </Route>
              <Route exact path="/admin/support/messenger">
                <Messenger />
              </Route>
              <Route path="/admin/support/messenger/:id">
                <Messenger />
              </Route>
              <Route exact path="/admin/approve">
                <Contract />
              </Route>
              {!user?.role?.isApproveUser && (
                <Redirect from="/admin" to="/admin/info" />
              )}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
