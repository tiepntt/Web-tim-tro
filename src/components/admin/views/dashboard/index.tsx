import React, { useEffect, useState } from "react";
import { Avatar, Container, Grid, makeStyles } from "@material-ui/core";

import Page from "../../../Page";
import { Budget } from "./Budget";
import { TotalCustomers } from "./TotalCustomers";
import { TasksProgress } from "./TasksProgress";
import { Sales } from "./Sales";
import { TrafficByDevice } from "./TrafficByDevice";
import { ListProduct } from "./LatestProducts";
import { LatestOrders } from "./LatestOrders";
import HomeIcon from "@material-ui/icons/Home";
import HouseIcon from "@material-ui/icons/House";
import ApartmentIcon from "@material-ui/icons/Apartment";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import { SearchAPI } from "../../../../api/apartment/search";
import { EmploymentAPI } from "../../../../api/admin/employment";
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
  const [listCountByType, setListCountByType] = useState(
    [] as { id: number; name: string; count: number }[]
  );
  const [listCountByDistrict, setListCountByDistrict] = useState(
    [] as { id: number; name: string; count: number }[]
  );
  const [listNew, setListNew] = useState({
    apartmentCount: 0,
    commentCount: 0,
    userCount: 0,
    deadlineCount: 0,
  });
  const getListCountByType = () => {
    SearchAPI.getCountByType().then((res) => {
      setListCountByType(res.data.result || []);
    });
  };
  const getListCountByDistrict = () => {
    SearchAPI.getCountByDistrict().then((res) => {
      setListCountByDistrict(res.data.result || []);
    });
  };
  const getNew = () => {
    EmploymentAPI.getListNew().then((res) => setListNew(res.data.result));
  };
  useEffect(() => {
    getListCountByType();
    getListCountByDistrict();
    getNew();
  }, []);
  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          {listCountByType.length >= 4 && (
            <>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Budget
                  title={"Nhà trọ"}
                  amount={listCountByType[0].count}
                  icon={<HomeIcon />}
                  color="green"
                />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Budget
                  title={listCountByType[1].name}
                  amount={listCountByType[1].count}
                  icon={<ApartmentIcon />}
                  color="red"
                />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Budget
                  title={listCountByType[2].name}
                  amount={listCountByType[2].count}
                  icon={<HouseIcon />}
                  color="blue"
                />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Budget
                  title={listCountByType[3].name}
                  amount={listCountByType[3].count}
                  icon={<HomeWorkIcon />}
                  color="orange"
                />
              </Grid>
            </>
          )}
          <Grid item lg={8} md={12} xl={6} xs={12}>
            <Sales />
          </Grid>
          <Grid
            item
            container
            lg={4}
            md={12}
            xl={6}
            xs={12}
            spacing={3}
            style={{ height: 0 }}
          >
            <Grid item lg={12} md={12} xl={6} xs={12}>
              <TrafficByDevice list={listNew} />
            </Grid>
            <Grid item lg={12} md={12} xl={6} xs={12}>
              <ListProduct list={listCountByDistrict} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};
