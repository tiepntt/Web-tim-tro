import {
  FormControl,
  InputBase,
  makeStyles,
  MenuItem,
  Select,
  withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { ApartmentDto } from "../../api/apartment/apartment/dto";
import {
  condition,
  ConditionDto,
} from "../../api/apartment/apartment/dto/condtion";
import { SearchAPI } from "../../api/apartment/search";
import { ApartmentItem } from "../../containers/apartment/apartmentItem";
import { DropDownInput } from "../../containers/Input/dropdown";
import { PaginationItem } from "../../containers/pagination";
import "./style.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  margin: {
    width: "100%",
  },
}));
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);
interface Props {
  apartments?: ApartmentDto[];
  count: number;
  take: number;
  page: number;
  onChangePage: (e: number) => void;
}
const filter = [
  { name: "Sớm nhất", id: 1 },
  { name: "Muộn nhất", id: 1 },
  { name: "Diện tích tăng dần", id: 1 },
  { name: "Diện tích giảm dần", id: 1 },
];
export const Apartment = (props: Props) => {
  const { apartments, count, take, page, onChangePage } = props;
  const classes = useStyles();
  const getApartment = (index: number) => {
    if (apartments && apartments[index])
      return (
        <li>
          <ApartmentItem apartment={apartments[index]} />
        </li>
      );
    return null;
  };
  const getAmount = () => {
    return `${take * (page - 1) + 1} - ${
      take * page > count ? count : take * page
    }`;
  };
  return (
    <div className="apartment-list">
      <div className="apartment-title">
        Thuê nhà đất 2020 giá rẻ tại Việt Nam, giá thuê mới nhất
      </div>

      <ul>
        <div className="result row">
          <div className="col-lg-9  col-8 result-tag ">
            Kết quả : <b>{getAmount()}</b> trong <b>{count}</b>
          </div>
          <div className="filter col-lg-3 col-4   right">
            <FormControl className={classes.margin}>
              <DropDownInput
                input={filter}
                label="Sắp xếp theo"
                id="demo-customized-select"
                labelId="demo-customized-select-label"
                inputBootstrap={<BootstrapInput />}
              />
            </FormControl>
          </div>
        </div>

        {apartments?.map((item, index) => getApartment(index))}
      </ul>
      <div className="pagination-tag">
        <PaginationItem
          pageActive={page}
          lastPage={Math.floor(count / take) + 1}
          onPageChange={onChangePage}
        />
      </div>
    </div>
  );
};
