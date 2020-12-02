import {
  Avatar,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
} from "@material-ui/core";
import React from "react";

import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./style.scss";
const HeaderItem = () => {
  return (
    <div className={"HeaderItem"}>
      <Navbar className={"navbar-custom"} bg="light" expand="lg">
        <Container>
          {" "}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="/home" className={"name-app"}>
            TIMTRO.<small>vn</small>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Trang chủ</Nav.Link>
              <Nav.Link href="/link">Giới thiệu</Nav.Link>
              <Nav.Link href="/auto">Điều khoản</Nav.Link>
            </Nav>
            <a className="avatar-group" href="/profile">
              <div className="name">Tiệp</div>
              <div className="avatar">
                <Avatar src="https://cloud.mogi.vn/images/2020/11/21/581/537107b650a3455abcaa6396570f0217.jpg" />
              </div>
            </a>
          </Navbar.Collapse>
          <Button className={"post-button"} href="/login">
            Đăng Tin
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderItem;
