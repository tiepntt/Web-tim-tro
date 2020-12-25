import React from "react";
import { Avatar, Container, Grid, makeStyles } from "@material-ui/core";

import Page from "../../../Page";
import { Budget } from "./Budget";
import { TotalCustomers } from "./TotalCustomers";
import { TasksProgress } from "./TasksProgress";
import { Sales } from "./Sales";
import { TrafficByDevice } from "./TrafficByDevice";
import { LatestProducts } from "./LatestProducts";
import { LatestOrders } from "./LatestOrders";
import HomeIcon from "@material-ui/icons/Home";
import HouseIcon from "@material-ui/icons/House";
import ApartmentIcon from "@material-ui/icons/Apartment";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
const useStyles = makeStyles((theme: any) => ({
  root: {
    // backgroundColor: "#F4F6F8",
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

export const DashboardView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget
              title="Nhà trọ"
              amount={100}
              icon={<HomeIcon />}
              color="green"
            />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget
              title="Chung cư mini"
              amount={100}
              icon={<ApartmentIcon />}
              color="red"
            />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget
              title="Nhà riêng"
              amount={100}
              icon={<HouseIcon />}
              color="blue"
            />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget
              title="HomStay"
              amount={100}
              icon={<HomeWorkIcon />}
              color="orange"
            />
          </Grid>

          <Grid item lg={9} md={12} xl={9} xs={12}>
            <Sales />
          </Grid>
          <Grid item lg={3} md={6} xl={3} xs={12}>
            <TrafficByDevice />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};
