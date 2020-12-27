import "./style.scss";
import { Row } from "react-bootstrap";
import React from "react";

import "./style.scss";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {UserDetailDto} from "../../api/user/user/dto";
import {NumberDateJoin} from "../../libs/constants/function/time";
interface Props {
  user: UserDetailDto
}

export const ProfileUserInfo = (props: Props ) => {
  const {user} = props;
  return (
    <div className={"Info"}>
      <Row>
        <div className="avatarUser">
          <img  src={user?.avatar?.url ?? "https://www.avatarins.com/image/homesmall.png"}  alt={"avatar"}/>
        </div>
        <div className="remark">
          <div className="name">{user?.name}</div>
          <div className="email">{user?.email}</div>
          <div className="">
            Đã tham gia
            <span className="time">{NumberDateJoin(user?.create_at)}</span>
          </div>
          {/*<div className="page">20 tin BĐS đang đăng</div>*/}
          <div className="phone">
            <FontAwesomeIcon icon={faPhoneAlt} color={"#009177"} />
            {"     "}
            <span>{user?.contactUser?.phone}</span>
          </div>
        </div>
      </Row>
    </div>
  );
};
