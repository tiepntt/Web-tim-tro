import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles,
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import MoneyIcon from "@material-ui/icons/Money";

const useStyles = makeStyles((theme: any) => ({
  root: {
    height: "100%",
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 45,
    width: 45,
  },
  differenceIcon: {
    color: colors.red[900],
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1),
  },
}));

interface Props {
  className?: string;
  title?: string;
  icon?: any;
  amount?: number;
  color?: string;
}

export const Budget = (props: Props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const avatar = (icon: any, color?: string) => {
    return (
      <Avatar style={{ backgroundColor: color, height: 45, width: 45 }}>
        {icon}
      </Avatar>
    );
  };
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              {props.title}
            </Typography>
            <Typography color="textPrimary" variant="h5">
              {props.amount}
            </Typography>
          </Grid>
          <Grid item>{avatar(props.icon, props.color)}</Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
