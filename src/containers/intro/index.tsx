// @flow
import * as React from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

import Footer from "../../components/Footer";
import HeaderItem from "../../components/Navbar";

import "./style.scss";
type Props = {};
export const IntroPage = (props: Props) => {
  useEffect(() => {
    document.title = "Giới thiệu";
  }, []);
  return (
    <div>
      <Container className={"Intro"}>
        <HeaderItem />
        <div className="content">
          <div className="col-12">
            <div className="news-detail">
              <div>
                <h1 className="title">Về chúng tôi</h1>
              </div>
              <div className="summary"></div>
              <div className="body">
                <p>
                  <strong>
                    <a href="/">Timtro.vn</a>
                  </strong>{" "}
                  là trang web trực tuyến chuyên đăng tin về bất động sản, cung
                  cấp thông tin của các bất động sản thật. Đi kèm theo đó còn là
                  số liệu thị trường, thông tin khu vực và công cụ tính chi phí
                  cũng như thời hạn trả góp của từng bất động sản khác nhau.
                </p>
                <p></p>
                <p>
                  <strong>
                    <a href="/">Timtro.vn</a>
                  </strong>{" "}
                  là sân chơi dành cho môi giới cũng như chính chủ có cơ hội
                  đăng tin các bất động sản thật và chất lượng, mang đến nhiều
                  thông tin trung thực và tính minh bạch cao trên từng khu vực
                  dành cho người xem. Từ đó giúp môi giới và chính chủ tiếp cận
                  được nhiều đối tượng khách hàng tiềm năng hơn, đồng thời tăng
                  hiệu quả và tạo ra một thị trường bất động sản cực nhộn nhịp,
                  sôi nổi tại Việt Nam.
                </p>
                <p>
                  Không những thế, Timtro.vn còn là nơi hỗ trợ những người thuê,
                  người mua đang có nhu cầu tìm kiếm một sản phẩm bất động sản
                  thích hợp với nhu cầu của bản thân một cách nhanh chóng hơn
                  thông qua hàng nghìn tin đăng mỗi ngày trên khắp cả nước.
                </p>
                <p>
                  Với mong muốn được hỗ trợ tận tâm và hết mình cho khách hàng,
                  Timtro.vn luôn ra sức tạo nên những tính năng tìm kiếm nhắm
                  đến từng phân khúc đối tượng mục tiêu khác nhau.
                </p>
                <ul>
                  <li>
                    Trong đó có thể kể đến tính năng “
                    <strong>Phòng trọ sinh viên</strong>” giúp các sinh viên dễ
                    dàng tìm kiếm các phòng trọ nằm gần trường,
                  </li>
                  <li>
                    Hay như tính năng “<strong>Giá nhà đất</strong>” giúp người
                    dùng tra cứu thông tin giá nhà đất tại từng con đường trên
                    từng khu vực.
                  </li>
                </ul>
                <p>
                  Mang tầm nhìn tương lai là trở thành một trong những trang
                  thông tin bất động sản uy tín và được nhiều người biết đến
                  nhất tại Việt Nam,{" "}
                  <strong>
                    <a href="/">Timtro.vn</a>
                  </strong>{" "}
                  đang từng bước phát triển, đổi mới và cung cấp những dịch vụ
                  tốt nhất dành cho khách hàng, độc giả.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
