import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Apartment } from "../../components/apartment";
import { ApartmentDetailItem } from "../../components/apartment-detail-item";
import Footer from "../../components/Footer";
import HeaderItem from "../../components/Navbar";
import SearchHeader from "../../components/search-header";
import { SideBar } from "../../components/sibar";
import { SideBarApartment } from "../../components/SideBarApartment";
import { CarausolFooter } from "../../containers/carausol.footer";
import "./style.scss";
import { CommentItem } from "../../containers/apartment/commentItem";
import { CommentInput } from "../../components/comment-input";
interface Props {}

export const ApartmentDetail = (props: Props) => {
  useEffect(() => {
    document.title = "Apartment";
  }, []);
  return (
    <div className={"apartment-detail"}>
      <HeaderItem />
      <Container className="content">
        <Row>
          <div className="col-lg-8 col-12">{/* <ApartmentDetailItem /> */}</div>
          <div className="col-lg-4 col-12 sidebar-component">
            <SideBarApartment />
          </div>
        </Row>
        <hr />
        <CommentItem />
        <CommentItem />
        <CommentInput />
        <div>
          <div className="title">Bất động sản tương tự</div>
          <CarausolFooter />
        </div>
      </Container>

      <Footer />
    </div>
  );
};
