import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  makeStyles,
  useTheme,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import PhoneIcon from "@material-ui/icons/Phone";
import TabletIcon from "@material-ui/icons/Tablet";

import HomeWorkIcon from "@material-ui/icons/HomeWork";
import { BudgetItem } from "../Budget/Item";

const useStyles = makeStyles(() => ({
  root: {
    // height: "100%",
    height: "auto",
  },
}));
interface Props {
  className?: string;
  list: {
    apartmentCount: number;
    commentCount: number;
    userCount: number;
    deadlineCount: number;
  };
}

export const TrafficByDevice = (props: Props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Tháng này" />
      <Divider />
      <CardContent>
        <List
          component="nav"
          className={classes.root}
          aria-label="mailbox folders"
        >
          <ListItem button>
            <ListItemText
              primary={
                <div className="d-flex">
                  <div className="title-item" style={{ flexGrow: 1 }}>
                    Bài đăng mới
                  </div>
                  <div className="amount-item">{props.list.apartmentCount}</div>
                </div>
              }
            />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText
              primary={
                <div className="d-flex">
                  <div className="title-item" style={{ flexGrow: 1 }}>
                    Bình luận
                  </div>
                  <div className="amount-item">{props.list.commentCount}</div>
                </div>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary={
                <div className="d-flex">
                  <div className="title-item" style={{ flexGrow: 1 }}>
                    Người dùng mới
                  </div>
                  <div className="amount-item">{props.list.userCount}</div>
                </div>
              }
            />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText
              primary={
                <div className="d-flex">
                  <div className="title-item" style={{ flexGrow: 1 }}>
                    Bài đăng hết hạn
                  </div>
                  <div className="amount-item">{props.list.deadlineCount}</div>
                </div>
              }
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
