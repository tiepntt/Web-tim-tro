import React from "react";
import { Container, Row } from "react-bootstrap";
import { Apartment } from "../../components/apartment";
import { ApartmentDetailItem } from "../../components/apartment-detail-item";
import Footer from "../../components/Footer";
import HeaderItem from "../../components/Navbar";
import SearchHeader from "../../components/search-header";
import { SideBar } from "../../components/sibar";

interface Props {}

export const ApartmentDetail = (props: Props) => {
  return (
    <div className={"apartment-detail"}>
      <HeaderItem />
      <Container className="content">
        <Row>
          <div className="col-lg-8 col-12">
            <ApartmentDetailItem />
          </div>
          <div className="col-lg-4 col-12">
            <SideBar />
          </div>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};
