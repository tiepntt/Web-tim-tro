import { Avatar } from "@material-ui/core";
import React from "react";

import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./style.scss";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {ActionUserLogout} from "../../service/store/userStore/action";
const HeaderItem = () => {
  const apartment = useSelector((state: RootState) => state.UserReducer);
  const dispatch = useDispatch();
  const clear = () => {
    dispatch(ActionUserLogout());
    // console.log(apartment.account)
  }
  const HeaderUser = () => {
    return apartment.account
        ? <>
          <div className="avatar">
            <Avatar src="https://cloud.mogi.vn/images/2020/11/21/581/537107b650a3455abcaa6396570f0217.jpg" />
          </div>
          <NavDropdown className="name" title="Tiệp" id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">Thông tin</NavDropdown.Item>
            <NavDropdown.Item  onClick={clear}>Đăng xuất</NavDropdown.Item>
          </NavDropdown>
          <Button className={"post-button"} href="/apartment/add">
            Đăng Tin
          </Button>
        </>
        : <Button className={"post-button"} href="/login">
          Đăng nhâp
        </Button>
  }
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
              <Nav.Link href="/terms">Điều khoản</Nav.Link>
            </Nav>
            <HeaderUser/>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderItem;
