import "./style.scss";
import {Image, Row} from "react-bootstrap";
import React from "react";

import "./style.scss";
interface Props {
}

export const ProfileUserInfo = (props: Props) => {
    return (
        <div className={"Info"}>
            <Row>
                <div className="avatar">
                    <Image
                        roundedCircle
                        fluid
                        width={150}
                        height={150}
                        src="https://thegioidienanh.vn/stores/news_dataimages/anhvu/102019/11/10/5228_02.jpg"
                    />
                </div>
                <div className="remark">
                    <div className="name">Nguyễn Thái Tiệp</div>
                    <div className="email">nguyenthaitiep206@gmail.com</div>
                    <div className="email">Nhà đầu tư</div>
                    <div className="time">Đã tham gia 20 ngày trước</div>
                    <div className="int">Đã bán 20 căn nhà</div>
                </div>
            </Row>
        </div>
    );
}