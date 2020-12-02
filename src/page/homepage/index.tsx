// @flow
import * as React from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Apartment } from "../../components/apartment";
import Footer from "../../components/Footer";
import HeaderItem from "../../components/Navbar";
import SearchHeader from "../../components/search-header";
import { SideBar } from "../../components/sibar";

import "./style.scss";
type Props = {};
export const HomePage = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);
  return (
    <div className={"Home"}>
      <HeaderItem />
      <SearchHeader />
      <Container className="content">
        <Row>
          <div className="col-lg-8 col-12">
            <Apartment />
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
