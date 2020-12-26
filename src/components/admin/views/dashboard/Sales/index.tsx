import React, { useEffect, useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { ApartmentDto } from "../../../../../api/apartment/apartment/dto";
import { ApartmentApi } from "../../../../../api/apartment/apartment";
import { ApartmentItemDashBoard } from "../../../../../containers/apartment/apartment.dashboad";
import { EmploymentAPI } from "../../../../../api/admin/employment";
import { handleToast } from "../../../../../service/Toast";

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
  },
}));
interface Props {
  className?: string;
}
export const Sales = (props: Props) => {
  const { className, ...rest } = props;
  const [apartments, setApartments] = useState([] as ApartmentDto[]);
  const classes = useStyles();
  const theme = useTheme();
  useEffect(() => {
    EmploymentAPI.getMaxApartment({ take: 5 }).then((res) => {
      if (res.data.status === 200) {
        setApartments(res.data.result);
      } else {
        handleToast(res.data);
      }
    });
  }, []);
  return (
    <Card className={classes.root} {...rest}>
      <CardHeader title="Tương tác nhiều nhất" />
      <Divider />
      <CardContent>
        {apartments
          ? apartments.map((item) => (
              <ApartmentItemDashBoard apartment={item} />
            ))
          : null}
      </CardContent>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}></Box>
    </Card>
  );
};
