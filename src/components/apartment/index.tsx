import {
  FormControl,
  InputBase,
  makeStyles,
  MenuItem,
  Select,
  withStyles,
} from "@material-ui/core";
import React from "react";
import { ApartmentItem } from "../../containers/apartment/apartmentItem";
import { PaginationItem } from "../../containers/pagination";
import "./style.scss";

interface Props {}
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

export const Apartment = (props: Props) => {
  const classes = useStyles();

  return (
    <div className="apartment-list">
      <div className="apartment-title">
        Thuê nhà đất 2020 giá rẻ tại Việt Nam, giá thuê mới nhất
      </div>

      <ul>
        <div className="result row">
          <div className="col-lg-9  col-8 result-tag ">
            Kết quả <b>1 - 15</b> trong <b>1124142</b>
          </div>
          <div className="filter col-lg-3 col-4   right">
            <FormControl className={classes.margin}>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                input={<BootstrapInput />}
                value={1}
              >
                <MenuItem value={1}>Sớm nhất</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <li>
          <ApartmentItem avatar="https://cloud.mogi.vn/images/2020/08/18/120/f9bc95cb39d5462887620d0afd860634.jpg" />
        </li>
        <li>
          <ApartmentItem avatar="https://cloud.mogi.vn/images/2020/11/09/368/2f98c1ec352f419db14344b46415b315.jpg" />
        </li>
        <li>
          <ApartmentItem avatar="https://cloud.mogi.vn/images/2020/07/02/581/72fc9f434e474b429273663a032d12de.jpg" />
        </li>
        <li>
          <ApartmentItem avatar="https://cloud.mogi.vn/images/2020/07/22/376/44bdbe8040e54218ba9c2bd5f3080d2a.jpg" />
        </li>
      </ul>
      <div className="pagination-tag">
        <PaginationItem pageActive={1} lastPage={10} />
      </div>
    </div>
  );
};
