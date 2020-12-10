import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SvgIcon } from "@material-ui/core";
import { Delete, Edit, Remove } from "@material-ui/icons";
import React from "react";
import { ApartmentItem } from "../../../containers/apartment/apartmentItem";

interface Props {}

export const ApartmentProfile = (props: Props) => {
  return (
    <div>
      <div className="apartment-info-list " style={{}}>
        <ul>
          {" "}
          <li>
            <div className="d-flex">
              <ApartmentItem avatar="https://cloud.mogi.vn/images/2020/08/18/120/f9bc95cb39d5462887620d0afd860634.jpg" />
            </div>
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
