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
  list?: { id: number; name: string; count: number }[];
}

export const ListProduct = (props: Props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Thống kê" />
      <Divider />
      <CardContent>
        <List
          component="nav"
          className={classes.root}
          aria-label="mailbox folders"
        >
          {props.list?.map((item) => (
            <>
              <ListItem button>
                <ListItemText
                  primary={
                    <div className="d-flex">
                      <div className="title-item" style={{ flexGrow: 1 }}>
                        {item.name}
                      </div>
                      <div className="amount-item">{item.count}</div>
                    </div>
                  }
                />
              </ListItem>
              <Divider />
            </>
          ))}

          <Divider light />
        </List>
      </CardContent>
    </Card>
  );
};
