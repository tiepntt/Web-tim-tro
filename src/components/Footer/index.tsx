import {
  faFacebookSquare,
  faGithub,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useEffect, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.scss";
import {useLocation} from "react-router-dom";

interface Props {}

const Footer = (props: Props) => {
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  useEffect(() =>{
    let pathName = location.pathname;
    let check = pathName.includes("admin");
    setHidden((check))  }, [location])
  return (
    <div className={"Footer"} hidden={hidden}>
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <div className="header-footer">
              <div className="name-web">
                TIMTRO<small>.vn</small>
              </div>
              <div className="slogan">
                Đúng phòng - đúng gia - đúng thời điểm
              </div>
              <div className={"contactIcon"}>
                <a
                  href="https://www.facebook.com/tiep.nguyenthai.779/"
                  className={"contactIcon-item"}
                >
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    color={"#3b5998"}
                    size={"lg"}
                  />
                </a>
                <a href="#" className={"contactIcon-item"}>
                  <FontAwesomeIcon
                    icon={faYoutubeSquare}
                    color={"#FF0000"}
                    size={"lg"}
                  />
                </a>
                <a href="" className={"contactIcon-item"}>
                  <FontAwesomeIcon
                    icon={faGithub}
                    color={"black"}
                    size={"lg"}
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="header-footer">ĐẠI DIỆN</div>
            <div className="companyName">CÔNG TY CỔ PHẦN TIMTRO.vn</div>
            <div className="address">
              <span>Trụ sở chính : 144 Xuân Thủy, Cầu Giấy, Hà Nội</span>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className={"Contact"}>
              <div className="header-footer">Liên Hệ</div>
              <div className="contact-fild">
                <div className="">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    color={"#3b5998"}
                    size={"xs"}
                  />
                  {"  "}
                  <span>0819200620</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color={"#3b5998"}
                    size={"xs"}
                  />
                  {"  "}
                  <span>Nguyenthaitiep206@gmail.com</span>
                </div>
              </div>
            </div>
          </Col>
          {/* <Col xs={12}>HElllo</Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
