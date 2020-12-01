import {
  faAngleLeft,
  faAngleRight,
  faPhone,
  faPhoneAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Chip, makeStyles } from "@material-ui/core";
import draftToHtml from "draftjs-to-html";
import React, { useState } from "react";
import { Carousel, Col, Image, Row } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import "./style.scss";
interface Props {}
const text = `<div class="prop-info-content">
🟢 Khai trương dự án Lotus Apartment<br>
🟡 Căn hộ dịch vụ thiết kế kiểu Ý hiện đại<br>
🔴 Không gian mở ban công thoáng mát<br>
🔻Dịch vụ dọn vệ sinh 2 lần/tuần, thai ga gối 1 lần/tuần phục vụ tận răng
🔻<br>
🔹 Vị trí đi bộ 500m tới Sân Bay<br>
🔹 Trên đường Trường Sơn<br>
🔹 Khu dân cư quang chức cấp cao vô cùng an ninh<br>
</div>`;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  location: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(1),
    height: theme.spacing(4),
    color: "#214234",
    fontSize: 12,
    fontWeight: "bold",
    textDecoration: "none",
  },
}));
export const ApartmentDetailItem = (props: Props) => {
  const classes = useStyles();
  return (
    <div className="apartment-detail-item">
      <div className="slide-apartment">
        <Carousel
          nextIcon={
            <FontAwesomeIcon icon={faAngleRight} color="black" size={"2x"} />
          }
          prevIcon={
            <FontAwesomeIcon icon={faAngleLeft} color="black" size={"2x"} />
          }
          interval={5000}
        >
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://cloud.mogi.vn/images/2020/11/03/456/82ee2b80fe4243e1a238bca87babb205.jpg"
              alt="First slide"
              thumbnail
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://cloud.mogi.vn/images/2020/11/03/456/82ee2b80fe4243e1a238bca87babb205.jpg"
              alt="Third slide"
              thumbnail
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://cloud.mogi.vn/images/2020/11/03/456/82ee2b80fe4243e1a238bca87babb205.jpg"
              alt="Third slide"
              thumbnail
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://cloud.mogi.vn/images/2020/11/03/456/82ee2b80fe4243e1a238bca87babb205.jpg"
              alt="Third slide"
              thumbnail
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="info">
        <div className="info-title">
          <div className="title">
            Chính chủ cho thuê căn hộ 1PN, đầy đủ tiện nghi và nội thất 45m2.
          </div>
          <div className="address">
            Bạch Đằng, Phường 2, Quận Tân Bình, TPHCM
          </div>
          <div className="price">3.000.000 vnđ</div>
        </div>
        <div className="info-main">
          <div className="title">Thông tin chính</div>
          <div className="content">
            <Row>
              <Col md={6} xs={12}>
                <div className="item-info">
                  <span className="item-title">Giá tiền</span>
                  <span className="data">: 3.000.000 vnđ</span>
                </div>
                <div className="item-info">
                  <span className="item-title">Diện tích</span>
                  <span className="data">
                    : 40 m<sup>2</sup>
                  </span>
                </div>
                <div className="item-info">
                  <span className="item-title">Ngày đăng</span>
                  <span className="data">: 20/10/2020</span>
                </div>
                <div className="item-info">
                  <span className="item-title">Loại hình</span>
                  <span className="data">: Nhà trọ bình dân</span>
                </div>
                <div className="item-info">
                  <span className="item-title">Giá điện</span>
                  <span className="data">: 3.000/số</span>
                </div>
                <div className="item-info">
                  <span className="item-title">Giá nước</span>
                  <span className="data">: 25k/khối</span>
                </div>{" "}
              </Col>

              <Col md={6} xs={12}>
                <div className="item-info">
                  <span className="item-title">Thang máy</span>
                  <span className="data">: Có</span>
                </div>
                <div className="item-info">
                  <span className="item-title">Điều hòa</span>
                  <span className="data">: Có</span>
                </div>
                <div className="item-info">
                  <span className="item-title">Ban Công</span>
                  <span className="data">: Không</span>
                </div>
                <div className="item-info">
                  <span className="item-title">Vệ sinh</span>
                  <span className="data">: Khép kín</span>
                </div>
                <div className="item-info">
                  <span className="item-title">Bếp</span>
                  <span className="data">: Khép kín</span>
                </div>
                <div className="item-info">
                  <span className="item-title">Chỗ để xe</span>
                  <span className="data">: Có</span>
                </div>{" "}
              </Col>
            </Row>
          </div>
        </div>
        <div className="info-detail">
          <div className="title">Mô tả chi tiết</div>
          <div className="content">{ReactHtmlParser(text)}</div>
        </div>
        <div className="location">
          <div className="title">Địa điểm lân cận</div>

          <Chip
            className={classes.location}
            label="BigC Thăng Long"
            component="a"
            href="#chip"
            clickable
            variant="outlined"
          />
          <Chip
            className={classes.location}
            label="BigC Thăng Long"
            component="a"
            href="#chip"
            clickable
            variant="outlined"
          />
          <Chip
            className={classes.location}
            label="BigC Thăng Long"
            component="a"
            href="#chip"
            clickable
            variant="outlined"
          />
          <Chip
            className={classes.location}
            label="BigC Thăng Long"
            component="a"
            href="#chip"
            clickable
            variant="outlined"
          />
          <Chip
            className={classes.location}
            label="BigC Thăng Long"
            component="a"
            href="#chip"
            clickable
            variant="outlined"
          />
        </div>
      </div>
      <div className="user-info row">
        <div className="col-md-7 col-12 user-item">
          <Avatar
            src="https://scontent.fhan5-5.fna.fbcdn.net/v/t1.0-9/74607660_532630757561738_5938117982679990272_o.jpg?_nc_cat=101&ccb=2&_nc_sid=174925&_nc_ohc=dgBa5uDDRi8AX-OrKVV&_nc_ht=scontent.fhan5-5.fna&oh=b11b1f1315c58f43c04fe5a8b7e680ef&oe=5FEC4744"
            className={classes.large}
          />
          <div className="user">
            <div className="name">Nguyễn Thái Tiệp</div>
            <div className="time">Đã tham gia 2 năm</div>
          </div>
        </div>
        <div className="box col-md-5 col-12">
          <div className="contact-box">
            <div className="contact">
              <FontAwesomeIcon icon={faPhoneAlt} color={"#009177"} />
              <span> 0819 *** 620</span>
            </div>
            <div className="reviewStar">
              <FontAwesomeIcon icon={faStar} color={"#009177"} />
              <span> 4.5</span>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
