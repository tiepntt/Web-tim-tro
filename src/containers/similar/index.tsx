import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React from "react";
import "./style.scss";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
interface Props {
  className?: string;
  list?: { id: number; name: string; count: number }[];
  title: string;
  onClick?: (value: number) => void;
}
const useStyles = makeStyles(() => ({
  root: {
    // height: "100%",
    height: "auto",
    paddingTop: 0,
  },
  itemList: {
    padding: 0,
    paddingTop: 2.5,
    paddingBottom: 2.5,
    fontSize: "0.875rem",
  },
  itemText: { fontSize: "0.875rem" },
  iconArrow: {
    maxWidth: 30,
    paddingLeft: 0,
    paddingRight: 10,
  },
  headerTitle: {
    padding: "10px 10px 10px 15px",
    fontSize: 15,
    fontWeight: "bold",
  },
}));

export const Similar = (props: Props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.headerTitle}>{props.title}</div>
      <Divider />
      <CardContent>
        <List
          component="nav"
          className={classes.root}
          aria-label="mailbox folders"
        >
          {props.list?.map((item) => (
            <div
              onClick={() => {
                props.onClick && props.onClick(item.id);
              }}
            >
              <ListItem button className={classes.itemList}>
                <div className={classes.iconArrow}>
                  <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    color={"#1b998a"}
                  />
                </div>
                <ListItemText
                  primary={
                    <div className={classes.itemText}>
                      {item.name} ({item.count})
                    </div>
                  }
                />
              </ListItem>
              <Divider />
            </div>
          ))}

          <Divider light />
        </List>
      </CardContent>
    </Card>
  );
};
