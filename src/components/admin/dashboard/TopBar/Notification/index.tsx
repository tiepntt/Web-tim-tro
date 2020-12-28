import React, { useEffect, useState } from "react";
import { Link as RouterLink, useHistory, useLocation } from "react-router-dom";
import Poppers from "@material-ui/core/Popper";
import clsx from "clsx";
import "./style.scss";
import classNames from "classnames";

import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  ClickAwayListener,
  Paper,
  Grow,
  MenuList,
  MenuItem,
  hexToRgb,
  Divider,
  Avatar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import { useDispatch, useSelector, useStore } from "react-redux";
import { RootState } from "../../../../../store";
import { NotificationApi } from "../../../../../api/user/notification";
import {
  BottomScrollListener,
  useBottomScrollListener,
} from "react-bottom-scroll-listener";
import { NotificationGetList } from "../../../../../api/user/notification/dto";
import { convertDateTime } from "../../../../../libs/constants/function/time";
import { loadNotificationNews } from "../../../../../loader/loadNotification";
const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: "#009177",
  },
  title: {
    color: "#ffffff",
    fontSize: 20,
  },
  avatar: {
    width: 60,
    height: 60,
  },
  dropdown: {
    borderRadius: "3px",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(" + hexToRgb("#000000") + ", 0.26)",
    top: "100%",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    backgroundColor: "white",
    WebkitBackgroundClip: "padding-box",
    backgroundClip: "padding-box",
  },
  dropdownItem: {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    WebkitTransition: "all 150ms linear",
    MozTransition: "all 150ms linear",
    OTransition: "all 150ms linear",
    MsTransition: "all 150ms linear",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    lineHeight: "1.42857143",
    whiteSpace: "nowrap",
    height: "unset",
    minHeight: "unset",
    zIndex: 1300,
    "&:hover": {
      backgroundColor: "primary",
      color: "white",
    },
  },
  popperClose: {
    pointerEvents: "none",
  },
  popperNav: {
    [theme.breakpoints.down("sm")]: {
      position: "static !important",
      left: "unset !important",
      top: "unset !important",
      transform: "none !important",
      willChange: "unset !important",
      "& > div": {
        boxShadow: "none !important",
        marginLeft: "0rem",
        marginRight: "0rem",
        transition: "none !important",
        marginTop: "0px !important",
        marginBottom: "0px !important",
        padding: "0px !important",
        backgroundColor: "transparent !important",
        "& ul li": {
          color: "#ffffff" + " !important",
          margin: "10px 15px 0!important",
          padding: "10px 15px !important",
          "&:hover": {
            backgroundColor: "hsla(0,0%,78%,.2)",
            boxShadow: "none",
          },
        },
      },
    },
  },
  paper: {
    width: 300,

    textAlign: "left",
    fontSize: "1.1rem",
  },
}));

export const Notifications = () => {
  const classes = useStyles();
  const [canCallApi, setCanCallApi] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [seenAll, setSeeAll] = useState(false);
  const location = useLocation();
  const [condition, setCondition] = useState({
    take: 6,
    skip: 0,
  });
  const [notifications, setNotifications] = useState(
    [] as NotificationGetList[]
  );
  const scrollRef = useBottomScrollListener(
    () => {
      if (
        notifications &&
        notifications.length !== 0 &&
        notifications.length % condition.take === 0
      ) {
        setCondition({ ...condition, skip: condition.skip + condition.take });
      }
    },
    {
      offset: 0,
      debounce: 200,
      // triggerOnNoScroll: true,
    }
  );

  const notification = useSelector(
    (state: RootState) => state.Notification as { count: number }
  );
  useEffect(() => {
    setCanCallApi(true);
    setIsOpen(false);
    setOpenNotification(null);
  }, [location]);
  const [openNotification, setOpenNotification] = React.useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const store = useStore();

  const handleClickNotification = (event: any) => {
    setCanCallApi(true);
    if (openNotification && (openNotification as any).contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
    if (isOpen) {
      setTimeout(() => {
        setNotifications([]);
      }, 200);
    }
    if (!isOpen) {
      setCondition({
        take: 6,
        skip: 0,
      });
    }
    setIsOpen(!isOpen);
  };

  const getNotification = () => {
    if (canCallApi && notifications.length % condition.take === 0) {
      // setCanCallApi(false);
      NotificationApi.getAll(condition).then((res) => {
        if (res.data.status === 200) {
          setNotifications(notifications.concat(res.data.result.notifications));
          // setCanCallApi(true);
        }
      });
    }
  };
  useEffect(() => {
    getNotification();
  }, [condition]);
  const seen = (id: number, apartmentId: number) => {
    NotificationApi.seen(id).then((res) => {
      if (res.data.status === 200) loadNotificationNews(store);
    });
    history.push("/apartment/" + apartmentId);
  };
  const seeAll = () => {
    notifications.forEach((item) => {
      if (parseInt((item?.isSeen || 1).toString()) === 0) {
        NotificationApi.seen(item?.id || 0).then((res) => {
          if (res.data.status === 200) loadNotificationNews(store);
        });
      }
    });
  };
  // @ts-ignore
  // @ts-ignore
  return (
    <IconButton color="inherit" onClick={handleClickNotification}>
      {notification && notification.count !== 0 ? (
        <Badge
          badgeContent={
            notification && notification.count !== 0 ? notification.count : ""
          }
          color="error"
          variant="standard"
        >
          <NotificationsIcon />
        </Badge>
      ) : (
        <NotificationsIcon />
      )}
      <Poppers
        open={Boolean(openNotification)}
        anchorEl={openNotification}
        transition
        disablePortal
        className={
          classNames({ [classes.popperClose]: !openNotification }) +
          " " +
          classes.popperNav +
          "paper"
        }
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className={classes.paper}>
              <div className="notification-li">
                <div className="notification-header">Thông báo</div>
                <div className="notification-list">
                  <div className="inner-scroll-example">
                    {notifications.map((item) => (
                      <>
                        <div
                          className="notification-item d-flex"
                          onClick={() =>
                            seen(
                              item.id || 0,
                              item?.notification_apartmentId || 0
                            )
                          }
                        >
                          <div className="notification-avatar-user">
                            <Avatar src={item.user_create_avatar_url}></Avatar>
                            {parseInt((item?.isSeen || 1).toString()) === 0 && (
                              <div className="new-notification">new</div>
                            )}
                          </div>
                          <div className="notification-content-item">
                            <div className="notification-main-content-item">
                              {item.notification_context}
                            </div>
                            <div className="notification-date-create">
                              {convertDateTime(item.notification_creat_at)}
                            </div>
                          </div>
                        </div>
                        <Divider />
                      </>
                    ))}
                  </div>
                </div>
                <div className="footer-notification" onClick={seeAll}>
                  Đánh dấu đã đọc tất cả thông báo trên
                </div>
              </div>
            </Paper>
          </Grow>
        )}
      </Poppers>
    </IconButton>
  );
};
