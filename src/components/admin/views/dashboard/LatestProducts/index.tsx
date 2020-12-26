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
          <ListItem button>
            <ListItemText
              primary={
                <div className="d-flex">
                  <div className="title-item" style={{ flexGrow: 1 }}>
                    Ba Đình
                  </div>
                  <div className="amount-item">5</div>
                </div>
              }
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary={
                <div className="d-flex">
                  <div className="title-item" style={{ flexGrow: 1 }}>
                    Bắc Từ Liêm
                  </div>
                  <div className="amount-item">5</div>
                </div>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary={
                <div className="d-flex">
                  <div className="title-item" style={{ flexGrow: 1 }}>
                    Cầu Giấy
                  </div>
                  <div className="amount-item">5</div>
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
                    Đống Đa
                  </div>
                  <div className="amount-item">5</div>
                </div>
              }
            />
          </ListItem>{" "}
          <Divider light />
          <ListItem button>
            <ListItemText
              primary={
                <div className="d-flex">
                  <div className="title-item" style={{ flexGrow: 1 }}>
                    Hà Đông
                  </div>
                  <div className="amount-item">5</div>
                </div>
              }
            />
          </ListItem>{" "}
          <Divider light />
          <ListItem button>
            <ListItemText
              primary={
                <div className="d-flex">
                  <div className="title-item" style={{ flexGrow: 1 }}>
                    Hai Bà Trưng
                  </div>
                  <div className="amount-item">5</div>
                </div>
              }
            />
          </ListItem>{" "}
          <Divider light />
          <ListItem button>
            <ListItemText
              primary={
                <div className="d-flex">
                  <div className="title-item" style={{ flexGrow: 1 }}>
                    Hoàn Kiếm
                  </div>
                  <div className="amount-item">5</div>
                </div>
              }
            />
          </ListItem>{" "}
          <Divider light />
          <ListItem button>
            <ListItemText
              primary={
                <div className="d-flex">
                  <div className="title-item" style={{ flexGrow: 1 }}>
                    Hoàng Mai
                  </div>
                  <div className="amount-item">5</div>
                </div>
              }
            />
          </ListItem>{" "}
          <Divider light />
          <ListItem button>
            <ListItemText
              primary={
                <div className="d-flex">
                  <div className="title-item" style={{ flexGrow: 1 }}>
                    Long Biên
                  </div>
                  <div className="amount-item">5</div>
                </div>
              }
            />
          </ListItem>{" "}
          <Divider light />
          <ListItem button>
            <ListItemText
              primary={
                <div className="d-flex">
                  <div className="title-item" style={{ flexGrow: 1 }}>
                    Tây Hồ
                  </div>
                  <div className="amount-item">5</div>
                </div>
              }
            />
          </ListItem>{" "}
          <Divider light />
          <ListItem button>
            <ListItemText
              primary={
                <div className="d-flex">
                  <div className="title-item" style={{ flexGrow: 1 }}>
                    Thanh Xuân
                  </div>
                  <div className="amount-item">5</div>
                </div>
              }
            />
          </ListItem>{" "}
          <Divider light />
        </List>
      </CardContent>
    </Card>
  );
};
