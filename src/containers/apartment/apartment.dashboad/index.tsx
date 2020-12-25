import React, { useEffect, useState } from "react";
import { ApartmentDto } from "../../../api/apartment/apartment/dto";
import { Image } from "react-bootstrap";
import "./style.scss";
import { FormatNumber } from "../../../components/apartment-detail-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBath,
  faBed,
  faComment,
  faExclamationCircle,
  faEye,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { convertDate } from "../../../libs/constants/function/time";
import { getAddress } from "../apartmentItem";

interface Props {
  apartment?: ApartmentDto;
}

export const ApartmentItemDashBoard = (props: Props) => {
  const { apartment } = props;
  return (
    <div className="row apartment-user">
      <div className="col-sm-4 col-12 img-info" style={{ marginLeft: 10 }}>
        <div className="img">
          <Image
            src={
              apartment?.avatar ||
              "http://localhost:3000/apartment-1608717707128.jpg"
            }
            className="apartment-avatar"
            thumbnail
          />
        </div>
      </div>
      <div className="col-sm-8 col-12">
        <div className="info">
          <div className="title-post">{apartment?.title}</div>
          <div className="address">{getAddress(apartment)}</div>
          <ul className={"icon-info"}>
            <li>
              <FontAwesomeIcon icon={faSquare} />{" "}
              <span>
                {" "}
                {apartment?.area}m<sup>2</sup>
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faBed} /> {apartment?.bedRoom}
            </li>
            <li>
              <FontAwesomeIcon icon={faBath} /> {apartment?.bathRoom}
            </li>{" "}
            <li>
              <FontAwesomeIcon icon={faEye} /> {apartment?.views}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} /> {apartment?.reviewCount}
            </li>
            <li>
              <FontAwesomeIcon icon={faExclamationCircle} />{" "}
              {apartment?.reportCount}
            </li>
          </ul>
          <div className="d-flex">
            <a
              href={`/profileUser/${apartment?.user?.id}`}
              className="author"
              style={{ flexGrow: 1 }}
            >
              <span>Tác giả: </span>
              <span>{apartment?.user?.name}</span>
            </a>
            <div className="date">
              <span>Ngày đăng: </span>
              <span>{convertDate(apartment?.create_at)}</span>
            </div>
          </div>
        </div>
        <div className="price">{FormatNumber(apartment?.price, "vnđ")}</div>
      </div>
    </div>
  );
};
