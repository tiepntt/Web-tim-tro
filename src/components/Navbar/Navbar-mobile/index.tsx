import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import PollIcon from "@material-ui/icons/Poll";
import ApartmentIcon from "@material-ui/icons/Apartment";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "./style.scss";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ActionUserLogout } from "../../../service/store/userStore/action";
import { RoleAdmin } from "../../../libs/constants/role";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LockIcon from "@material-ui/icons/Lock";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { Avatar } from "@material-ui/core";
import { AccountDto } from "../../../api/user/user/dto";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

type Anchor = "top" | "left" | "bottom" | "right";
interface Props {
  className: string;
}
const navbarData = [
  { name: "Trang chủ", href: "/", icon: <HomeIcon /> },
  { name: "Giới thiệu", href: "/link", icon: <PollIcon /> },
  { name: "Điều khoản", href: "/terms", icon: <BookmarkIcon /> },
];

const userNav = [
  { name: "Thông tin", href: "/admin/info", icon: <AccountBoxIcon /> },
  { name: "Đổi mật khẩu", href: "/changePassword", icon: <LockIcon /> },
];
const postNav = [
  {
    name: "Đăng bài",
    href: "/apartment/add",
    icon: <PostAddIcon />,
  },
];
const Login = [{ name: "Đăng nhập", href: "/login", icon: <BookmarkIcon /> }];

export const NavbarMobile = (props: Props) => {
  const notifications = useSelector(
    (state: RootState) => state.Notification as { count: number }
  );
  const history = useHistory();
  const user = useSelector(
    (state: RootState) => state.UserReducer.account as AccountDto
  );
  const dispatch = useDispatch();
  const { className } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const Logout = [
    {
      name: "Đăng xuất",
      href: "/admin",
      icon: <ExitToAppIcon />,
      onClick: () => {
        dispatch(ActionUserLogout());
        history.push("/");
      },
    },
  ];

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {user?.id && (
        <>
          <div className="userInfo  ">
            <Avatar src={user?.avatar?.url} sizes="large"></Avatar>
            <div className="name">{user?.name}</div>
          </div>
          <Divider />
        </>
      )}
      <List>
        {navbarData.map((text, index) => (
          <ListItem
            button
            key={index}
            onClick={() => {
              history.push(text.href);
            }}
          >
            <ListItemIcon>{text.icon}</ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {user?.id
          ? userNav.map((text, index) => (
              <ListItem
                button
                key={index}
                onClick={() => {
                  history.push(text.href);
                }}
              >
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItem>
            ))
          : Login.map((text, index) => (
              <ListItem
                button
                key={index}
                onClick={() => {
                  history.push(text.href);
                }}
              >
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItem>
            ))}
      </List>
      <Divider />
      {user?.id ? (
        <>
          {user && user?.role?.isCreateApartment && (
            <ListItem
              button
              onClick={() => {
                history.push("/apartment/add");
              }}
            >
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Đăng bài" />
            </ListItem>
          )}
          <ListItem
            button
            onClick={() => {
              history.push("/admin");
            }}
          >
            <ListItemIcon>
              <ApartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Quản lý" />
          </ListItem>
        </>
      ) : null}
      <Divider />
      {user?.id &&
        Logout.map((text, index) => (
          <ListItem button key={index} onClick={text.onClick}>
            <ListItemIcon>{text.icon}</ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
      <Divider />
    </div>
  );

  return (
    <div className={"  navbar-mobile "}>
      <div className="container d-flex item-nav">
        <div className="icon" style={{ flexGrow: 1 }}>
          {(["left"] as Anchor[]).map((anchor) => (
            <React.Fragment key={anchor}>
              <div className="togle-btn" onClick={toggleDrawer(anchor, true)}>
                <MenuIcon fontSize="large" />
              </div>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
        <div className="name-web">
          <span>TIMTRO</span>.vn
        </div>
      </div>
    </div>
  );
};
