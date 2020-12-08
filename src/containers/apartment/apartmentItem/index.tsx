import {
  faBath,
  faBed,
  faBlenderPhone,
  faHeart,
  faPhone,
  faPhoneAlt,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Image } from "react-bootstrap";

import "./style.scss";
interface Props {
  avatar?: string;
}
export const ApartmentItem = (props: Props) => {
  const { avatar } = props;
  return (
    <div className="apartment-item">
      <a href="/apartment">
        <div className="props-img">
          <Image src={avatar} className="apartment-avatar" />
        </div>
        <div className="info">
          <div className="apartment-item-title">
            Cho thuê căn hộ 100% Full nội thất gia sieu re o mot nguoi nha chu
            sieu de tinh. chi can toi o thoi
          </div>
          <div className="address">
            Số nhà 79 ngõ 59, Khúc Thừa Dụ, Cầu Giấy, Hà Nội
          </div>
          <ul className={"icon-info"}>
            <li>
              <FontAwesomeIcon icon={faSquare} />{" "}
              <span>
                32m<sup>2</sup>
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faBed} />
              {" 0"}
            </li>

            <li>
              <FontAwesomeIcon icon={faBath} />
              {" 0"}
            </li>
          </ul>
          <div className="price">3.000.000 vnđ</div>
          <div className="date">
            <span className="date-title">Ngày đăng: </span>
            <span>Hôm nay</span>
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
