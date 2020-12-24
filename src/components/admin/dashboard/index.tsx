import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import { Route, Switch, useHistory } from "react-router";
import { ApartmentProfile } from "../../Profile/Apartment";
import { InfoProfile } from "../../Profile/Info";
import { User } from "../../Profile/User";
import Conversation from "../../../containers/chat/conversation";
import Statistical from "../../Profile/chart";
import Messenger from "../../../containers/chat/messenger";
import { Contract } from "../../Profile/contract";
import { RoleAdmin } from "../../../libs/constants/role";
import { UserDashboard } from "../views/user";
import { ApartmentDashboard } from "../views/apartment";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
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
          <div className={classes.content}>
            <Switch>
              <Route exact path="/admin">
                <Statistical />
              </Route>
              <Route exact path="/admin/apartment">
                <ApartmentDashboard />
              </Route>
              <Route exact path="/admin/info">
                <InfoProfile />
              </Route>

              {user?.role?.isApproveUser && (
                <Route exact path="/admin/user/">
                  <UserDashboard />
                </Route>
              )}

              <Route exact path="/admin/support">
                <Conversation />
              </Route>
              <Route exact path="/admin/support/messenger">
                <Messenger />
              </Route>
              <Route path="/admin/support/messenger/:id">
                <Messenger />
              </Route>
              <Route exact path="/admin/data/location">
                <div>Dữ liệu</div>
              </Route>
              <Route exact path="/admin/contract">
                <Contract />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
