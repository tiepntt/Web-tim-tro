import React from "react";
import { ApartmentDto } from "../../../api/apartment/apartment/dto";
import { Image } from "react-bootstrap";
import "./style.scss";
import { FormatNumber } from "../../../components/apartment-detail-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WarningIcon from "@material-ui/icons/Warning";
import {
  faBath,
  faBed,
  faComment,
  faExclamation,
  faExclamationCircle,
  faEye,
  faHeart,
  faPhoneAlt,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { convertDate } from "../../../libs/constants/function/time";
import { faReact } from "@fortawesome/free-brands-svg-icons";
interface Props {
  apartment?: ApartmentDto;
}

export const ApartmentItemUser = (props: Props) => {
  return (
    <div className="row apartment-user">
      <div className="col-sm-4 col-12 img-info" style={{ marginLeft: 10 }}>
        <div className="img">
          <Image
            src={"http://localhost:3000/apartment-1608717707128.jpg"}
            className="apartment-avatar"
            thumbnail
            width={500}
            height={500}
          />
        </div>
        <div className="price">{FormatNumber(1000000, " vnđ")}</div>
      </div>
      <div className="col-sm-8 col-12">
        <div className="info">
          <div className="title-post">
            Tro giá rẻ 2tr5 đến 5tr gần ĐH TĐT, ĐH RMIT, ĐH CẢNH SAT,, ĐH RMIT,
            ĐH CẢNH SAT ĐH CẢNH SAT ĐH CẢNH SAT ĐH CẢNH SAT ĐH CẢNH SAT ĐH CẢNH
            SAT ĐH CẢNH SAT ĐH CẢNH SAT
          </div>
          <div className="address">
            Đường số 38, Phường Tân Quy, Quận 7, TPHCM
          </div>
          <ul className={"icon-info"}>
            <li>
              <FontAwesomeIcon icon={faSquare} />{" "}
              <span>
                {" "}
                {10}m<sup>2</sup>
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faBed} /> {1}
            </li>
            <li>
              <FontAwesomeIcon icon={faBath} /> {1}
            </li>{" "}
            <li>
              <FontAwesomeIcon icon={faEye} /> {1}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} /> {1}
            </li>
            <li>
              <FontAwesomeIcon icon={faExclamationCircle} /> {1}
            </li>
          </ul>
          <div className="date">
            <span>Ngày đăng: </span>
            <span>{convertDate(new Date())}</span>
          </div>
          <a href="#" className="author">
            <span>Tác giả: </span>
            <span>Nguyễn Thái Tiệp</span>
          </a>
        </div>
        <div className="detail-fast row">
          <div className="col-6">
            <div className="status wait">Chờ phê duyệt</div>
          </div>
          <div className=" col-6">
            <div className="report active"> Đã cho thuê</div>
          </div>
        </div>
      </div>
    </div>
  );
};
