import {
  faBath,
  faBed,
  faHeart,
  faPhoneAlt,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Image } from "react-bootstrap";
import { ApartmentDto } from "../../../api/apartment/apartment/dto";
import NumberFormat from "react-number-format";
import "./style.scss";
import { convertDate } from "../../../libs/constants/function/time";
interface Props {
  avatar?: string;
  apartment?: ApartmentDto;
}
export const ApartmentItem = (props: Props) => {
  const { apartment } = props;
  const getAddress = () => {
    return `${apartment?.streetNo ? apartment?.streetNo + "," : ""} 
    ${apartment?.street?.name ? apartment?.street?.name + "," : ""}
    ${apartment?.ward?.name ? apartment?.ward?.name + "," : ""}
    ${apartment?.district?.name ? apartment?.district?.name : ""} `;
  };
  const FormatNumber = (n?: number, suffix = "", prefix = "") => {
    return (
      <NumberFormat
        value={n || 0}
        displayType={"text"}
        thousandSeparator={true}
        suffix={suffix}
        prefix={prefix}
      />
    );
  };
  const getUrl = () => {
    return "/apartment/" + apartment?.id || "";
  };
  return (
    <div className="apartment-item">
      <a href={getUrl()}>
        <div className="props-img">
          <Image src={apartment?.avatar} className="apartment-avatar" />
        </div>
        <div className="info">
          <div className="apartment-item-title">{apartment?.title}</div>
          <div className="address">{getAddress()}</div>
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
            </li>
          </ul>
          <div className="price">{FormatNumber(apartment?.price, " vnđ")}</div>
          <div className="date">
            <span className="date-title">Ngày đăng: </span>
            <span>{convertDate(apartment?.create_at)}</span>
          </div>
          <div className="float-right">
            <ul>
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} color={"#009177"} />{" "}
                <span className="phone-number">0819200***</span>
              </li>
              {"  "}
              <li>
                <FontAwesomeIcon icon={faHeart} color={"#f45235"} size={"lg"} />{" "}
              </li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
};
