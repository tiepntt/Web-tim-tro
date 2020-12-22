import "./style.scss";
import {Image, Row} from "react-bootstrap";
import React from "react";

import "./style.scss";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
interface Props {
}

export const ProfileUserInfo = (props: Props) => {
    return (
        <div className={"Info"}>
            <Row>
                <div className="avatarUser">
                    {/*<img  src="https://i.vietgiaitri.com/2018/9/12/hoi-ca-hani-exid-lai-co-them-khoanh-khac-de-doi-khi-bi-dan-em-hu-6c37af.jpg"  alt={"avatar"}/>*/}
                </div>
                <div className="remark">
                    <div className="name">NGUYỄN THÁI TIỆP</div>
                    <div className="email">Nhà đầu tư</div>
                    <div className="">
                        Đã tham gia
                        <span className="time"> 1 năm 3 tháng</span>
                    </div>
                    <div className="page">20 tin BĐS đang đăng</div>
                    <div className="phone">
                        <FontAwesomeIcon icon={faPhoneAlt} color={"#009177"} />{"     "}
                        <span>08192003431</span>
                    </div>
                </div>
            </Row>
        </div>
    );
}