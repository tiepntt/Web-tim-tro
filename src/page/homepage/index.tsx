// @flow
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Apartment } from "../../components/apartment";
import Footer from "../../components/Footer";
import HeaderItem from "../../components/Navbar";
import SearchHeader from "../../components/search-header";

import "./style.scss";
type Props = {};
export const HomePage = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <div className={"Home"}>
      <HeaderItem />
      <SearchHeader />
      <Container className={"content"}>
        <Row>
          <Col lg={8}>
            <Apartment />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
