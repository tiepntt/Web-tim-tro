import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SvgIcon } from "@material-ui/core";
import { Delete, Edit, Remove } from "@material-ui/icons";
import React, { useState } from "react";
import { ApartmentItem } from "../../../containers/apartment/apartmentItem";
import { HeaderFilter } from "../header-filter";

interface Props {
  onTogle?: () => void;
}
export const ApartmentProfile = (props: Props) => {
  const { onTogle } = props;
  const [apartments, setApartments] = useState([]);
  const filter = [];
  return (
    <div>
      <HeaderFilter onTogle={onTogle} />
      <div className="apartment-info-list " style={{}}>
        <ul>
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
      </div>
    </div>
  );
};
