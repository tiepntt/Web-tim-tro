import { InputBase, withStyles } from "@material-ui/core";
import React from "react";

import { ApartmentDto } from "../../api/apartment/apartment/dto";

import { ApartmentItem } from "../../containers/apartment/apartmentItem";
import { DropDownInput } from "../../containers/Input/dropdown";
import { PaginationItem } from "../../containers/pagination";
import "./style.scss";

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
  // const [search, setSearch] = useState(new URLSearchParams(location.search));

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
        <div className="result  ">
          <div className="result-tag ">
            Kết quả : <b>{getAmount()}</b> trong <b>{count}</b>
          </div>
        </div>

        {apartments?.map((item, index) => getApartment(index))}
      </ul>
      <div className="pagination-tag">
        <PaginationItem
          pageActive={page}
          lastPage={Math.ceil(count / take)}
          onPageChange={onChangePage}
        />
      </div>
    </div>
  );
};
