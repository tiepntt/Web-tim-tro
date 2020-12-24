import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SvgIcon } from "@material-ui/core";
import { Delete, Edit, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ApartmentItemUser } from "../../../containers/apartment/apartment.user";
import { ApartmentItem } from "../../../containers/apartment/apartmentItem";
import { ApartmentList } from "../../../containers/table/table-apartment";
import { RootState } from "../../../store";
import { HeaderFilter } from "../header-filter";

interface Props {
  onTogle?: () => void;
}
const filter = {
  tilte: "Lọc theo",
  data: [
    { key: "approve", title: "Tất cả", value: -1 },
    { key: "approve", title: "Đã duyệt", value: 1 },
    { key: "approve", title: "Chưa duyệt", value: 0 },
  ],
};
export const ApartmentProfile = (props: Props) => {
  const { onTogle } = props;
  const [apartments, setApartments] = useState([]);
  const history = useHistory();
  const role = useSelector(
    (state: RootState) => state.UserReducer.account?.role
  );
  useEffect(() => {
    if (!role) history.push("/login");
  }, [role]);
  return (
    <div>
      <div className="apartment-info-list " style={{}}>
        <div className="row">
          <div className="col-xl-6 col-12">
            <ApartmentItemUser />
          </div>
          <div className="col-xl-6 col-12">
            <ApartmentItemUser />
          </div>
        </div>
      </div>
    </div>
  );
};
