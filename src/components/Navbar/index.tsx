import React from "react";

import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./style.scss";
const HeaderItem = () => {
  return (
    <div className={"HeaderItem"}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className={"name-app"}>
            TIMTRO.<small>vn</small>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Trang chủ</Nav.Link>
              <Nav.Link href="#link">Giới thiệu</Nav.Link>
              <Nav.Link href="#auto">Điều khoản</Nav.Link>
            </Nav>
            <Button className={"post-button"}>Đăng Tin</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderItem;
