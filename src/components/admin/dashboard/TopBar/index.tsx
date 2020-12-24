import React, { useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import clsx from "clsx";

import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import { useDispatch } from "react-redux";
import { ActionUserLogout } from "../../../../service/store/userStore/action";
import { AuthApi } from "../../../../api/admin/authenticate";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#009177",
  },
  avatar: {
    width: 60,
    height: 60,
  },
}));
interface Props {
  className?: string;
  onMobileNavOpen: () => void;
}
const TopBar = (props: Props) => {
  const classes = useStyles();
  const [notifications] = useState([]);
  const { className, onMobileNavOpen, ...rest } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const logOut = () => {
    AuthApi.logout().then((res) => {
      dispatch(ActionUserLogout());
      history.push("/");
    });
  };
  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to="/">{/* <Logo /> */}</RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={logOut}>
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
