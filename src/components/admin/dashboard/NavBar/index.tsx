import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { RootState } from "../../../../store";
import { useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  BarChart as BarChartIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
} from "react-feather";
import NavItem from "./NavItem";
import ChatIcon from "@material-ui/icons/Chat";
import ApartmentIcon from "@material-ui/icons/Apartment";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { RoleAdmin } from "../../../../libs/constants/role";

const items = [
  {
    href: "/admin",
    icon: BarChartIcon,
    title: "Thống kê",
    private: [RoleAdmin.MANAGER, RoleAdmin.ADMIN],
  },
  {
    href: "/admin/info",
    icon: UserIcon,
    title: "Thông tin cá nhân",
  },
  {
    href: "/admin/apartment",
    icon: ApartmentIcon,
    title: "Quản lý bài đăng",
  },
  {
    href: "/admin/user",
    icon: ShoppingBagIcon,
    title: "Quản lý tài khoản",
    private: [RoleAdmin.MANAGER, RoleAdmin.ADMIN],
  },
  {
    href: "/admin/approve",
    icon: FormatListBulletedIcon,
    title: "Phê duyệt",
    private: [RoleAdmin.MANAGER, RoleAdmin.ADMIN],
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: "calc(100% - 64px)",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

interface Props {
  onMobileClose: () => void;
  openMobile: boolean;
}

const NavBar = (props: Props) => {
  const classes = useStyles();
  const location = useLocation();
  const { onMobileClose, openMobile } = props;
  const user = useSelector((state: RootState) => state.UserReducer.account);
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user?.avatar?.url}
          to="/app/account"
        />
        <Typography color="textPrimary" variant="h5">
          {user?.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user?.role?.name}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => {
            if (
              item.private &&
              !item.private.find((i) => i === user?.role?.code)
            ) {
              return null;
            } else {
              return (
                <NavItem
                  href={item.href}
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                />
              );
            }
          })}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

export default NavBar;
